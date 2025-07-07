using DG.Tweening;
using Do;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.Events;

public class PanelUpgrade : MonoBehaviour
{
    [SerializeField] MenuMain menuMain;
    public ButtonScaleAnimation btnUpgrade;
    public ButtonScaleAnimation btnContinue;
    public ButtonScaleAnimation btnClose;
    public TextMeshProUGUI userUpgradePoint;
    public Transform cityName;
    public TextMeshProUGUI cityNameText;
    public Transform animParent;
    public Transform holdToBuild;
    public GameObject nutAnimationObj;
    private readonly List<GameObject> nutAnimationList = new List<GameObject>();
    public List<Material> materialList = new List<Material>();
    public float jumpPower, duration;
    public float oldDuration;
    public float delayAnim = 0.1f;
    public float delayNotice = 3f;
    public float delayNoticeCount = 0;
    public float randomDelta = 1;
    public Vector3 middlePos;
    public float ratioPos = 3 / 4;
    public List<string> cityNames = new List<string>()
    {
        "WOOD HOUSE",
        "FOREST",
        "VOCALNO",
        "COASTLINE",
        "ICELAND",
    };


    private bool isHold = false;
    bool canPlayAnimBuild = false;
    Tween disableBtnTween, noticeTween;
    Tween t1, t2, t3;
    Tween holdTween;


    private void Update()
    {
        if (delayAnim > 0 && delayAnim < 0.1f)
        {
            delayAnim -= Time.deltaTime;

        }
        if (delayAnim < 0)
            delayAnim = 0.1f;
        if (btnUpgrade.gameObject.activeInHierarchy && isHold)
        {
            OnHoldUpgrade();
        }

        if (!isHold && delayNoticeCount < delayNotice)
        {
            delayNoticeCount += Time.deltaTime;
            if (delayNoticeCount >= delayNotice)
            {
                noticeTween?.Kill();
                noticeTween = holdToBuild.DOScale(1.15f, 0.5f).SetEase(Ease.OutQuad).SetLoops(-1, LoopType.Yoyo);
            }
        }
    }
    public void Init()
    {
        isHold = false;
        noticeTween?.Kill();
        //middlePos = (IslandManager.Instance.targetAnimPos.position + btnUpgrade.transform.position) * ratioPos;
        middlePos = Vector3.Lerp(IslandManager.Instance.targetAnimPos.position, btnUpgrade.transform.position, ratioPos);

    }
    public void UpdateCityName(int key)
    {
        cityNameText.text = cityNames[key];
    }
    public void AnimOpenPanelUpgrade()
    {
        gameObject.SetActive(true);
        btnContinue.gameObject.SetActive(false);
        btnClose.gameObject.SetActive(true);
        btnUpgrade.enabled = false;
        cityName.localScale = Vector3.zero;
        btnUpgrade.transform.localScale = Vector3.zero;
        btnUpgrade.GetComponent<RectTransform>().anchoredPosition = new Vector2(0, 400 * GameConfig.Instance.RatioScaleScreen);

      //  userUpgradePoint.text = GameUtils.Cur_User_Point.ToString();
        t1?.Kill();
        t2?.Kill();
        t3?.Kill();
        t1 = cityName.DOScale(0.8f, 0.7f).SetEase(Ease.OutBack);
        if (GameUtils.Level_Parent_Island <= 4)
        {
            int oldView = menuMain.curIsLandView;
            if (GameUtils.Level_Parent_Island <= 4)
                menuMain.curIsLandView = GameUtils.Level_Parent_Island;
            HomeManager.Instance.UpdateArrowHome(GameUtils.Level_Parent_Island);
            IslandManager.Instance.parentIslands[menuMain.curIsLandView].gameObject.SetActive(true);
            t2 = IslandManager.Instance.transform.GetChild(0).DOLocalMoveX(-8 * GameUtils.Level_Parent_Island, 0.7f).SetEase(Ease.OutBack);
            cityNameText.text = cityNames[GameUtils.Level_Parent_Island];
            t3 = btnUpgrade.transform.DOScale(1, 0.7f).SetEase(Ease.OutBack).OnComplete(() =>
            {
                if (oldView != menuMain.curIsLandView)
                    IslandManager.Instance.parentIslands[oldView].gameObject.SetActive(false);
                IslandManager.Instance.InitPosPointRequire();
                Init();
                btnUpgrade.enabled = true;
            });
        }
    }
    public void KillTweenOpen()
    {
        t1?.Kill();
        t2?.Kill();
        t3?.Kill();
        gameObject.SetActive(false);
    }
    public void OnHoldUpgrade()
    {
        if (IslandManager.Instance.IsMaxLevel() || GameUtils.Cur_Island_Point >= IslandManager.Instance.upgradePoints )
        {
            DisableHold();
            return;
        }
        int addNum = 2;
        //if (GameUtils.Cur_User_Point < addNum)
        //{
        //    GameUtils.Cur_Island_Point += GameUtils.Cur_User_Point;
        //    GameUtils.Cur_User_Point = 0;
        //}
        //else
        //{
        //    GameUtils.Cur_User_Point -= addNum;
        //    GameUtils.Cur_Island_Point += addNum;
        //}
        //userUpgradePoint.text = GameUtils.Cur_User_Point.ToString();
        IslandManager.Instance.UpgradeEnviroment();
        if (canPlayAnimBuild)
        {
            //IslandManager.Instance.PlayAnimBuildChildIsland();
        }

        if (delayAnim == 0.1f)
        {
            VibrationUtil.Vibrate(10);
            AnimationHold(null);
            delayAnim -= Time.deltaTime;
        }
    }
    public void OnClickDownBtnUpgrade()
    {
        isHold = true;
        noticeTween?.Kill();
        noticeTween = holdToBuild.DOScale(1f, 0.3f).SetEase(Ease.InBack);
        holdTween?.Kill();
        holdTween = IslandManager.Instance.parentIslands[GameUtils.Level_Parent_Island].transform.DOScale(1.1f, 1f).OnComplete(() =>
        {
            canPlayAnimBuild = true;
        });
        delayNoticeCount = 0;
    }
    public void OnClickUpBtnUpgrade()
    {
        isHold = false;
        holdTween?.Kill();
        canPlayAnimBuild = false;
        holdTween = IslandManager.Instance.parentIslands[GameUtils.Level_Parent_Island].transform.DOScale(1f, 0.2f);
    }
    public void OnClickContinue()
    {
        btnContinue.enabled = false;
        menuMain.OpenCityCompletedPopUp();
    }
    private void DisableHold()
    {
        if (isHold)
        {
            isHold = false;
            btnUpgrade.enabled = false;
            disableBtnTween?.Kill();
            duration = oldDuration;
            disableBtnTween = btnUpgrade.transform.DOScale(1, 0.1f).OnComplete(() => EnableHold());
            canPlayAnimBuild = false;
            if (holdTween != null)
            {
                holdTween.Kill();
                holdTween = IslandManager.Instance.parentIslands[GameUtils.Level_Parent_Island].transform.DOScale(1f, 0.2f);
            }
            if (GameUtils.Cur_Island_Point >= IslandManager.Instance.upgradePoints)
            {
                CompleteIsland();
            }
        }
    }
    private void EnableHold()
    {
        btnUpgrade.enabled = true;
    }
    private void CompleteIsland()
    {
        GameUtils.Cur_Island_Point = 0;
        GameUtils.Level_Child_Island++;
        if (GameUtils.Level_Child_Island >= IslandManager.Instance.childIslands.Count)
        {
            AudioManager.Instance.Play(SoundType.Island_Complete_1);
            IslandManager.Instance.UpdateNewIsland();
            disableBtnTween?.Kill();
            btnUpgrade.transform.DOScale(0, 0.7f).SetEase(Ease.InBack).OnComplete(() =>
            {
                IslandManager.Instance.PlayVFXFinishIsland();
                VibrationUtil.Vibrate(200);
                //btnContinue.gameObject.SetActive(true);
                //btnContinue.transform.localScale = Vector3.zero;
                btnClose.gameObject.SetActive(false);
                DOVirtual.DelayedCall(1.5f, () =>
                {
                    //btnContinue.transform.DOScale(1, 0.8f).SetEase(Ease.OutBack);
                    //btnContinue.enabled = true;
                    menuMain.OpenCityCompletedPopUp();
                });
            });
        }
        else
        {
            AudioManager.Instance.Play(SoundType.Island_Complete_2);
            IslandManager.Instance.PlayVFXFinishChild();
            IslandManager.Instance.UpdateStatusIsland();
        }

        //middlePos = (IslandManager.Instance.targetAnimPos.position + btnUpgrade.transform.position) * ratioPos;
        middlePos = Vector3.Lerp(IslandManager.Instance.targetAnimPos.position, btnUpgrade.transform.position, ratioPos);
    }


    public void AnimationHold(UnityAction action)
    {
        var nutAnim = GetHiddenNutEffect();
        nutAnim.gameObject.SetActive(true);
        nutAnim.transform.position = btnUpgrade.transform.GetChild(0).position;
        nutAnim.transform.localScale = Vector3.one * 50f;
        jumpPower = Random.Range(0, 0.5f);
        //if (duration >  0.3f)
        //    duration -= oldDuration / 20f;
        AudioManager.Instance.Play(SoundType.Island_Build);
        Vector3 randomOffset = Random.insideUnitSphere * randomDelta;
        Vector3 newPos = middlePos + randomOffset;
        Vector3 posJump = IslandManager.Instance.targetAnimPos.position;
        nutAnim.transform.DOMove(newPos, duration / 3f).OnComplete(() =>
        {
            nutAnim.transform.DOJump(posJump, jumpPower, 1, 2 * duration / 3f);
        });
        nutAnim.transform.DOScale(70, duration / 3).OnComplete(() =>
        {
            nutAnim.transform.DOScale(20, 2 * duration / 3).OnComplete(() =>
            {
                if (action != null) action();
                nutAnim.SetActive(false);
            });
        });

    }
    private GameObject GetHiddenNutEffect()
    {
        foreach (var obj in nutAnimationList)
        {
            if (!obj.activeInHierarchy)
            {
                int random = Random.Range(0, 8);
                obj.GetComponentInChildren<MeshRenderer>().material = materialList[random];
                return obj;
            }
        }

        var nutAnim = Instantiate(nutAnimationObj, animParent);
        int rand = Random.Range(0, 8);
        nutAnim.GetComponentInChildren<MeshRenderer>().material = materialList[rand];
        nutAnimationList.Add(nutAnim);
        return nutAnim;
    }
}
