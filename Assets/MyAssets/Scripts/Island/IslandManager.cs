using DG.Tweening;
using Do;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class IslandManager : Singleton<IslandManager>
{
    [SerializeField] Camera mainCamera;
    [SerializeField] RectTransform canvasRect;
    [SerializeField] TextMeshProUGUI islandPointRequire;
    [SerializeField] ParticleSystem completeChildVFX;
    [SerializeField] ParticleSystem completeIslandVFX;
    public Transform targetAnimPos;
    public Material fillMat;
    public int upgradePoints;
    public List<IslandChild> childIslands = new List<IslandChild>();
    public List<Transform> parentIslands = new List<Transform>();
    public Transform currentIsLand;
    private List<int> childNumList = new List<int>() { 3, 2, 3, 2 };
    Tween t;

    protected override void Awake()
    {
        base.Awake();
    }
    protected override void OnDestroy()
    {
        base.OnDestroy();
    }
    private void Start()
    {
        transform.GetChild(0).localPosition = new Vector3(-8 * (GameUtils.Level_Parent_Island > 4 ? 4 : GameUtils.Level_Parent_Island), 0, 0);
        HomeManager.Instance.UpdateArrowHome(GameUtils.Level_Parent_Island > 4 ? 4 : GameUtils.Level_Parent_Island);
        InitIslandParent();
        InitChildIsland();
    }
    public void InitIslandParent()
    {
        for (int i = 0; i < parentIslands.Count; i++)
        {
            if (i < GameUtils.Level_Parent_Island)
            {
                foreach (Transform child in parentIslands[i].GetChild(0).GetChild(0))
                {
                    if (child.GetComponent<IslandChild>())
                        child.GetComponent<IslandChild>().Init(true);
                }
                continue;
            }
            else if (i > GameUtils.Level_Parent_Island)
                return;
            currentIsLand = parentIslands[i];
            currentIsLand.gameObject.SetActive(true);
            foreach (Transform child in currentIsLand.GetChild(0).GetChild(0))
            {
                if (child.GetComponent<IslandChild>() && !childIslands.Contains(child.GetComponent<IslandChild>()))
                {
                    childIslands.Add(child.GetComponent<IslandChild>());
                }
            }
        }
    }
    public void InitChildIsland()
    {
        if (GameUtils.Level_Parent_Island > parentIslands.Count) return;
        foreach (IslandChild child in childIslands)
        {
            child.Init();
        }
        InitPosPointRequire();
        UpdateIslandPointRequire();
    }
    public void UpdateStatusIsland()
    {
        if (GameUtils.Level_Child_Island >= childIslands.Count)
            return;
        InitPosPointRequire();
        UpdateIslandPointRequire();
    }
    public void UpdateNewIsland()
    {     
        GameUtils.Level_Parent_Island++;
        GameUtils.Level_Child_Island = 0;
        childIslands.Clear();
        if (GameUtils.Level_Parent_Island <= 4)
        {
            InitIslandParent();
            InitChildIsland();
        }

    }
    public void UpdateIslandPointRequire()
    {
        int num = upgradePoints - GameUtils.Cur_Island_Point;
        if (num < 0) num = 0;
        islandPointRequire.text = num.ToString();

    }
    public void InitPosPointRequire()
    {
        if (GameUtils.Level_Child_Island >= childIslands.Count)
        {
            islandPointRequire.transform.parent.gameObject.SetActive(false);
            return;
        }
        islandPointRequire.transform.parent.gameObject.SetActive(true);
        //islandPointRequire.transform.parent.localScale = Vector3.zero;
        //t?.Kill();
        //t = islandPointRequire.transform.parent.DOScale(0.7f, 0.7f).SetEase(Ease.OutBack);

        Vector3 viewportPos = mainCamera.WorldToViewportPoint(childIslands[GameUtils.Level_Child_Island].pointNumPos.position);
        Vector2 canvasPos = new Vector2(
            (viewportPos.x - 0.5f) * canvasRect.sizeDelta.x,
            (viewportPos.y - 0.5f) * canvasRect.sizeDelta.y
        );

        islandPointRequire.transform.parent.GetComponent<RectTransform>().anchoredPosition = canvasPos + new Vector2(0, 100);
        upgradePoints = childIslands[GameUtils.Level_Child_Island].pointRequire;
        targetAnimPos = childIslands[GameUtils.Level_Child_Island].targetAnimPos;
    }
    public void UpgradeEnviroment()
    {
        UpdateIslandPointRequire();
        childIslands[GameUtils.Level_Child_Island].UpgradeChildIsLand();       
    }
    public void PlayAnimBuildChildIsland()
    {
        parentIslands[GameUtils.Level_Parent_Island].GetComponentInChildren<Animation>().Play();
    }
    public bool IsMaxLevel()
    {
        return GameUtils.Level_Child_Island >= childIslands.Count;
    }
    public void PlayVFXFinishChild()
    {
        completeChildVFX.Play();
    }
    public void PlayVFXFinishIsland()
    {
        islandPointRequire.transform.parent.gameObject.SetActive(false);
        completeIslandVFX.Play();
    }
    public int GetProgressCurrentIsland()
    {
        if (GameUtils.Level_Parent_Island > 4)
            return 100;

        int progressCount = 0;
        int totalCount = 0;
        foreach (var childIsland in childIslands)
        {
            if (GameUtils.Level_Child_Island > childIsland.level - 1)
            {
                progressCount += childIsland.pointRequire;
            }
            else if (GameUtils.Level_Child_Island == childIsland.level - 1)
            {
                progressCount += GameUtils.Cur_Island_Point;
            }
            totalCount += childIsland.pointRequire;
        }

        return progressCount * 100 / totalCount;
    }
}
