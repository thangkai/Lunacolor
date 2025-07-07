using DG.Tweening;
using Do.Scripts.Loading;


using Spine.Unity;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class MenuMain : MonoBehaviour
{
    [SerializeField] TextMeshProUGUI levelText;
    [SerializeField] TextMeshProUGUI coinText;
    [SerializeField] TextMeshProUGUI heartText;
    [SerializeField] Image heartIcon;
    [SerializeField] List<Sprite> heartSprites = new List<Sprite>();
    [SerializeField] TMP_InputField levelChooseIPF;
    [SerializeField] TMP_InputField levelTypeChooseIPF;
    [SerializeField] Image featureFill;
    [SerializeField] PanelUpgrade panelUpgrade;
    [SerializeField] Image nextFeatureIcon;
    [SerializeField] List<Sprite> featureSprites;
    [SerializeField] TextMeshProUGUI featureNotice;
    [SerializeField] SettingPopUp settingPopUp;
    //[SerializeField] RefillHeartPopUp refillHeartPopUp;
    [SerializeField] CityCompletePopUp cityCompletePopUp;
    [SerializeField] Transform coinPosition;
    [SerializeField] RectTransform toBuildNotice;
    [SerializeField] TextMeshProUGUI progressIslandNum;
    [SerializeField] Button btnIsland;
    [SerializeField] ButtonScaleAnimation btnCloseIsland;
    public int curIsLandView;
    private int day, hour, min, sec;
    private List<Vector2> progressPos = new List<Vector2>()
    {
        new Vector2 (-0.3f, 2.4f),
        new Vector2 (6.6f, 1.5f),
        new Vector2 (16.4f, 2.4f),
        new Vector2 (23.7f, 3f),
        new Vector2 (33.4f, 1.3f)
    };


    Tween t;

    public void Init()
    {
        levelText.text = "LEVEL " + GameUtils.Level.ToString();
        UpdateHeart();
        UpdateCoin();
        levelChooseIPF.text = "";
        levelTypeChooseIPF.text = GameUtils.Level_Type.ToString();
        //InitFeatureFill();
        curIsLandView = GameUtils.Level_Parent_Island > 4 ? 4 : GameUtils.Level_Parent_Island;
        IslandManager.Instance.parentIslands[curIsLandView].gameObject.SetActive(true);
        InitProgressBuild();
    }
    public void InitProgressBuild()
    {
        if (GameUtils.Level_Parent_Island > 4 || GameUtils.Level_Parent_Island != curIsLandView)
            toBuildNotice.gameObject.SetActive(false);
        else
        {
            toBuildNotice.gameObject.SetActive(true);
            toBuildNotice.anchoredPosition = progressPos[GameUtils.Level_Parent_Island];
            progressIslandNum.text = IslandManager.Instance.GetProgressCurrentIsland().ToString() + "%";
        }
    }
    public void InitFeatureFill()
    {
        nextFeatureIcon.sprite = featureSprites[GameUtils.Cur_Feature_Index];
        nextFeatureIcon.SetNativeSize();
        featureFill.fillAmount = GameUtils.Level / (float) GameUtils.Feature_Level_Unlock[GameUtils.Cur_Feature_Index];
        featureNotice.text = "Unlock at level " + GameUtils.Feature_Level_Unlock[GameUtils.Cur_Feature_Index];
    }
    public void OnClickPlay()
    {
        if (GameUtils.Heart > 0 )
        {
            if (int.TryParse(levelChooseIPF.text, out int index))
            {
                GameUtils.Level = index;
            }
            if (int.TryParse(levelTypeChooseIPF.text, out int index2))
            {
                GameUtils.Level_Type = index2;
            }
            //else
            //    GameUtils.Level_Type = 0;

          
           // HandleFirebase.Instance.LogEventWithString(HandleFirebase.Ads_Show_Placement, "Loading");
            LoadingManager.Instance.RegisterCloseEvent(() =>
            {
             
            });

            LoadingManager.Instance.titleSpine.AnimationState.SetAnimation(0, "idle", true);
            LoadingManager.Instance.LoadScene(LoadingManager.SCENE_GAME);
        }
        else
            OpenRefillPopUp();
    }
    public void OnClickCity()
    {
        btnIsland.interactable = false;
        //levelChooseIPF.gameObject.SetActive(false);
        //levelTypeChooseIPF.gameObject.SetActive(false);
        toBuildNotice.gameObject.SetActive(false);
     
        HomeManager.Instance.AnimOpenPanel(() =>
        {
            btnCloseIsland.enabled = true;
            panelUpgrade.AnimOpenPanelUpgrade();
        });
    }
    public void OnClickCloseCity()
    {
        btnCloseIsland.enabled = false;
        panelUpgrade.KillTweenOpen();
        //levelChooseIPF.gameObject.SetActive(true);
        //levelTypeChooseIPF.gameObject.SetActive(true);
        InitProgressBuild();
     
        HomeManager.Instance.AnimClosePanel(() => 
        {
            btnIsland.interactable = true;
        });
    }
    public void OnClickSetting()
    {
        settingPopUp.Open();
    }
    public void UpdateCoin()
    {
        int coin = GameUtils.Coin;
        coinText.transform.DOScale(1.2f, 0.2f).OnComplete(() =>
        {
            if (coin > 1000000)
            {
                int headNum = coin / 1000000;
                coinText.text = headNum.ToString() + "M";
            }
            else
                coinText.text = coin.ToString();
            coinText.transform.DOScale(1f, 0.2f);
        });
    }
    public Vector3 GetCoinPosition()
    {
        return coinPosition.position;
    }
    public  void UpdateHeartRefill()
    {
      //  refillHeartPopUp.Init();
    }
    public void UpdateHeart()
    {
        //if (TimeManager.Instance.unlimitedHeart)
        //{
        //    day = Mathf.FloorToInt(TimeManager.Instance.GetUnlimitedHeartTime / 86400);
        //    if (day > 0)
        //        heartText.text = $"{day:0}d";
        //    else
        //    {
        //        hour = Mathf.FloorToInt(TimeManager.Instance.GetUnlimitedHeartTime / 3600);
        //        if (hour > 0)
        //        {
        //            heartText.text = $"{hour:0}h";
        //        }
        //        else
        //        {
        //            min = Mathf.FloorToInt(TimeManager.Instance.GetUnlimitedHeartTime / 60);
        //            sec = Mathf.FloorToInt(TimeManager.Instance.GetUnlimitedHeartTime % 60);
        //            heartText.text = $"{min:0}:{sec:00}s";
        //        }

        //    }
        //    if (heartIcon != null)
        //    {
        //        heartIcon.sprite = heartSprites[1];
        //        heartIcon.transform.GetChild(0).gameObject.SetActive(false);
        //    }
        //} 
        //else
        //{
        //    heartText.text = GameUtils.Heart.ToString();
        //    if (heartIcon != null)
        //    {
        //        heartIcon.sprite = heartSprites[0];
        //        heartIcon.transform.GetChild(0).gameObject.SetActive(true);
        //    }
        //}
    }
    public void OpenRefillPopUp()
    {
        if (GameUtils.Heart >= 5 )
            return;
       // refillHeartPopUp.Open();
    }
    public void OpenCityCompletedPopUp()
    {
        cityCompletePopUp.Open();
        cityCompletePopUp.Init();
    }    
    public void OnClickPrevious()
    {
        t?.Kill();
        curIsLandView--;
        if (curIsLandView <= 0)
            curIsLandView = 0;

        HomeManager.Instance.UpdateArrowHome(curIsLandView);
        panelUpgrade.UpdateCityName(curIsLandView);
        IslandManager.Instance.parentIslands[curIsLandView].gameObject.SetActive(true);
        InitProgressBuild();
        t = IslandManager.Instance.transform.GetChild(0).DOLocalMoveX(-8 * curIsLandView, 0.7f).SetEase(Ease.OutBack).OnComplete(() =>
        {
            IslandManager.Instance.parentIslands[curIsLandView + 1].gameObject.SetActive(false);
        });
    }
    public void OnClickNext()
    {
        t?.Kill();
        curIsLandView++;
        if (curIsLandView >= 4)
            curIsLandView = 4;

        HomeManager.Instance.UpdateArrowHome(curIsLandView);
        panelUpgrade.UpdateCityName(curIsLandView);
        IslandManager.Instance.parentIslands[curIsLandView].gameObject.SetActive(true);
        InitProgressBuild();
        t = IslandManager.Instance.transform.GetChild(0).DOLocalMoveX(-8 * curIsLandView, 0.7f).SetEase(Ease.OutBack).OnComplete(() =>
        {
            IslandManager.Instance.parentIslands[curIsLandView - 1].gameObject.SetActive(false);
        });
    }
}
