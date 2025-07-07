using DG.Tweening;
using Do;
using Do.Scripts.Loading;

using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class HomeManager : Singleton<HomeManager>
{
    public MenuMain mainMenu;
    [SerializeField] MenuShop shopMenu;
    [SerializeField] Transform uiNavigation;
    [SerializeField] Transform btnPlay;
    [SerializeField] Transform btnSetting;
    [SerializeField] GameObject bg;
    [SerializeField] Image featureProcess;
    [SerializeField] Transform topUI, leftUI, rightUI;
    [SerializeField] RectTransform btnPrevios, btnNext;
    public RectTransform coinGiftVFXpos;
    public RectTransform heartGiftVFXpos;
    public RectTransform boosterGiftVFXpos;

    protected override void Awake()
    {
        base.Awake();
        GameUtils.OnHeartChanged += () => {
            UpdateHeart();
        };
        //if (GameUtils.IsOpenGame)
        //{
        //    LoadingManager.Instance.RegisterLateEvent(() =>
        //    {
        //        if (GameUtils.FirstTimeOpenGame)
        //        {
        //            GameUtils.Level_Type = AdManager.Instance.Level_Type;
        //            GameUtils.FirstTimeOpenGame = false;
        //        }
        //        else if (GameUtils.Level >= AdManager.Instance.LEVEL_START_AOA)
        //        {
        //            LoadingManager.Instance.Pause();
        //            AdManager.Instance.ShowAOA_Interstitial_AllNetwork(() =>
        //            {
        //                LoadingManager.Instance.Continue();
        //            });
        //        }
        //    });
        //    GameUtils.IsOpenGame = false;
        //}
    }
    protected override void OnDestroy()
    {
        base.OnDestroy();
        GameUtils.OnHeartChanged -= () => {
            UpdateHeart();
        };
        DOTween.Kill(gameObject);
    }
    private void Start()
    {
        mainMenu.Init();
        AudioManager.Instance.Play(MusicType.Home);
        shopMenu.gameObject.SetActive(false);
        btnPlay.GetComponent<RectTransform>().anchoredPosition = new Vector2(0, -520 * GameConfig.Instance.RatioScaleScreen);
    }

    public void AnimOpenPanel(Action action)
    {
        topUI.DOLocalMoveY(1000, 0.6f).SetRelative(true).SetEase(Ease.InBack);
        btnSetting.DOLocalMoveY(1000, 0.6f).SetRelative(true).SetEase(Ease.InBack);
        featureProcess.transform.parent.DOLocalMoveY(1000, 0.6f).SetRelative(true).SetEase(Ease.InBack);
        uiNavigation.DOLocalMoveY(-1000, 0.6f).SetRelative(true).SetEase(Ease.InBack);
        btnPrevios.DOAnchorPos3DX(-100, 0.6f).SetRelative(true).SetEase(Ease.InBack);
        btnNext.DOAnchorPos3DX(100, 0.6f).SetRelative(true).SetEase(Ease.InBack);
        btnPrevios.GetComponent<ButtonScaleAnimation>().enabled = false;
        btnNext.GetComponent<ButtonScaleAnimation>().enabled = false;
        btnPlay.DOLocalMoveY(-1000, 0.6f).SetRelative(true).SetEase(Ease.InBack).OnComplete(() =>
        {
            action();
        });
    }
    public void AnimClosePanel(Action action)
    {
        topUI.DOLocalMoveY(-1000, 0.5f).SetRelative(true).SetEase(Ease.OutBack);
        btnSetting.DOLocalMoveY(-1000, 0.5f).SetRelative(true).SetEase(Ease.OutBack);
        featureProcess.transform.parent.DOLocalMoveY(-1000, 0.5f).SetRelative(true).SetEase(Ease.OutBack);
        uiNavigation.DOLocalMoveY(1000, 0.5f).SetRelative(true).SetEase(Ease.OutBack);
        btnPrevios.DOAnchorPos3DX(100, 0.5f).SetRelative(true).SetEase(Ease.OutBack);
        btnNext.DOAnchorPos3DX(-100, 0.5f).SetRelative(true).SetEase(Ease.OutBack);
        btnPlay.DOLocalMoveY(1000, 0.5f).SetRelative(true).SetEase(Ease.OutBack).OnComplete(() =>
        {
            btnPrevios.GetComponent<ButtonScaleAnimation>().enabled = true;
            btnNext.GetComponent<ButtonScaleAnimation>().enabled = true;
            action();
        });
    }
    public Vector3 GetCoinPosition()
    {
        return mainMenu.GetCoinPosition();
    }
    public void CloseShopTab()
    {
        shopMenu.AnimClose();
        mainMenu.gameObject.SetActive(true);
        transform.GetChild(0).gameObject.SetActive(true);
        bg.SetActive(true);
        IslandManager.Instance.gameObject.SetActive(true);
    }
    public void OpenShopTab()
    {
        shopMenu.gameObject.SetActive(true);
        shopMenu.Init();
        shopMenu.AnimOpen();
        mainMenu.gameObject.SetActive(false);
        transform.GetChild(0).gameObject.SetActive(false);
        IslandManager.Instance.gameObject.SetActive(false);
        bg.SetActive(false);
    }
    public void UpdateCoin()
    {
        mainMenu.UpdateCoin();
    }
    public void UpdateHeart()
    {
        mainMenu.UpdateHeart();
    }
    public void UpdateHeartRefill()
    {
        mainMenu.UpdateHeartRefill();
    }
    public void UpdateArrowHome(int num)
    {
        btnPrevios.gameObject.SetActive(num > 0);
        btnNext.gameObject.SetActive(num < 4);
    }
    public void UpdateTimeCountFreeGift(float seconds)
    {
        shopMenu.UpdateFreeGiftTime(seconds);
    }
    public void UpdateFreeGiftTimes()
    {
        shopMenu.UpdateFreeGiftButton();

    }
    public void DisableRemoveAds()
    {
        shopMenu.DisableRemoveAds();
    }
}
