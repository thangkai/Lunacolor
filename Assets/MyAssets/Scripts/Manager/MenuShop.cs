using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;
using TMPro;


using System.Globalization;
using System;

public class MenuShop : MonoBehaviour
{
    Sequence fadeTweenImg, fadeTweenTxt;
    Tween delayCloseTween;
    [SerializeField] RectTransform freeGift;
    [SerializeField] RectTransform ground_1;
    [SerializeField] RectTransform ground_2;
    [SerializeField] GameObject no_ads_bundle, special_offer, starter_pack;
    [SerializeField] TextMeshProUGUI freeGiftTimesText;
    [SerializeField] TextMeshProUGUI freeGiftTimeCountText;
    [SerializeField] List<GameObject> disableObjs = new List<GameObject>();
    [SerializeField] List<Sprite> freeGiftBtnSprites = new List<Sprite>();
    [SerializeField] VerticalLayoutGroup contentLayout;
    [SerializeField] List<Image> images = new List<Image>();
    [SerializeField] List<TextMeshProUGUI> texts = new List<TextMeshProUGUI>();
    [SerializeField] List<ParticleSystem> particles = new List<ParticleSystem>();
    [SerializeField] Transform removeAds;
    [SerializeField] GameObject noticeIcon;

    public void Init()
    {
        Debug.Log("Init Shop: " + GameUtils.IsRemoveAds + "/" + GameUtils.Is_Buy_NoAds_Bundle + "/" + GameUtils.Is_Buy_Special_Offer + "/" + GameUtils.Is_Buy_Starter_Pack);
        UpdateFreeGiftButton();

        //ground_2.sizeDelta = new Vector2(1000, 1330);
        if (GameUtils.IsRemoveAds)
            DisableRemoveAds();
        if (GameUtils.Is_Buy_Weekly_Bundle)
        {
            ground_1.sizeDelta = new Vector2(1000, 455);
            ground_1.transform.GetChild(2).gameObject.SetActive(false);
            DisableRemoveAds();
        }
        else
        {
            //HandleFirebase.Instance.LogEventWithString(HandleFirebase.IAP_Show_Pack_Name, PackId.WeeklyDeals.ToString());
            //HandleFirebase.Instance.LogEventWithString(HandleFirebase.IAP_Show_Type, "Shop");
            //HandleFirebase.Instance.LogEventWithString(HandleFirebase.IAP_Show_Pack_Name, PackId.WeeklyDeals.ToString());
        }
        if (GameUtils.Is_Buy_NoAds_Bundle)
        {
            //ground_2.sizeDelta -= new Vector2(0, 430);
            no_ads_bundle.transform.GetChild(0).gameObject.SetActive(false);
            no_ads_bundle.transform.GetChild(1).gameObject.SetActive(true);
            DisableRemoveAds();
        }
        else
        {
            //HandleFirebase.Instance.LogEventWithString(HandleFirebase.IAP_Show_Pack_Name, PackId.NoAdsBundle.ToString());
            //HandleFirebase.Instance.LogEventWithString(HandleFirebase.IAP_Show_Type, "Shop");
        }
        if (GameUtils.Is_Buy_Special_Offer)
        {
            special_offer.transform.GetChild(0).gameObject.SetActive(false);
            special_offer.transform.GetChild(1).gameObject.SetActive(true);
            DisableRemoveAds();
        }
        else
        {
            //HandleFirebase.Instance.LogEventWithString(HandleFirebase.IAP_Show_Pack_Name, PackId.SpecialOffer.ToString());
            //HandleFirebase.Instance.LogEventWithString(HandleFirebase.IAP_Show_Type, "Shop");
        }
        if (GameUtils.Is_Buy_Starter_Pack)
        {
            starter_pack.transform.GetChild(0).gameObject.SetActive(false);
            starter_pack.transform.GetChild(1).gameObject.SetActive(true);
        }
        else
        {
            //HandleFirebase.Instance.LogEventWithString(HandleFirebase.IAP_Show_Pack_Name, PackId.StarterPack.ToString());
            //HandleFirebase.Instance.LogEventWithString(HandleFirebase.IAP_Show_Type, "Shop");
        }
        //HandleFirebase.Instance.LogEventWithString(HandleFirebase.IAP_Show_Pack_Name, PackId.RemoveAds.ToString());
        //HandleFirebase.Instance.LogEventWithString(HandleFirebase.IAP_Show_Pack_Name, PackId.SmallCoinPack.ToString());
        //HandleFirebase.Instance.LogEventWithString(HandleFirebase.IAP_Show_Pack_Name, PackId.NormalCoinPack.ToString());
        //HandleFirebase.Instance.LogEventWithString(HandleFirebase.IAP_Show_Pack_Name, PackId.GiantCoinPack.ToString());
        //HandleFirebase.Instance.LogEventWithString(HandleFirebase.IAP_Show_Type, "Shop");

        //if (GameUtils.Is_Buy_NoAds_Bundle && GameUtils.Is_Buy_Special_Offer && GameUtils.Is_Buy_Starter_Pack)
        //    DisableLimitTimePacks();
    }
    public void DisableRemoveAds()
    {
        removeAds.GetChild(0).gameObject.SetActive(false);
        removeAds.GetChild(1).gameObject.SetActive(true);
    }
    public void DisableLimitTimePacks()
    {
        foreach (GameObject obj in disableObjs)
            obj.gameObject.SetActive(false);
        ground_1.sizeDelta = new Vector2(1000, 455);
        ground_1.transform.GetChild(2).gameObject.SetActive(false);
    }
    public void UpdateFreeGiftButton()
    {
        freeGiftTimesText.text = (5 - GameUtils.Free_Gift_Claim_Times).ToString();
        freeGift.GetChild(4).gameObject.SetActive(GameUtils.Free_Gift_Claim_Times == 0);
        freeGift.GetChild(5).gameObject.SetActive(GameUtils.Free_Gift_Claim_Times != 0);
     
            if (GameUtils.Free_Gift_Claim_Times == 0)
            {
                freeGift.GetChild(0).GetComponent<Image>().sprite = freeGiftBtnSprites[1];
                freeGiftTimesText.gameObject.SetActive(true);
                freeGiftTimeCountText.gameObject.SetActive(false);
                noticeIcon.SetActive(true);
            }
            else if (GameUtils.Free_Gift_Claim_Times < 5)
            {
                freeGift.GetChild(0).GetComponent<Image>().sprite = freeGiftBtnSprites[2];
                freeGiftTimesText.gameObject.SetActive(true);
                freeGiftTimeCountText.gameObject.SetActive(false);
                noticeIcon.SetActive(true);
            }
            else
            {
                freeGift.GetChild(0).gameObject.SetActive(false);
                freeGift.GetChild(1).gameObject.SetActive(true);
                freeGiftTimesText.gameObject.SetActive(false);
                freeGiftTimeCountText.gameObject.SetActive(false);
                noticeIcon.SetActive(false);
            }
        

    }
    public void UpdateFreeGiftTime(float seconds)
    {
        int min = Mathf.FloorToInt(seconds / 60);
        int second = Mathf.FloorToInt(seconds % 60);

        freeGiftTimeCountText.text = $"{min:0}:{second:00}s";
    }

    public void AnimOpen()
    {
        fadeTweenImg.Kill();
        fadeTweenTxt.Kill();
        delayCloseTween?.Kill();
        foreach (Image image in images)
        {
            image.DOFade(0, 0);
            fadeTweenImg.Join(image.DOFade(1, 0.3f));
        }
        foreach (TextMeshProUGUI text in texts)
        {
            text.DOFade(0, 0);
            fadeTweenTxt.Join(text.DOFade(1, 0.3f));
        }
        foreach (ParticleSystem particle in particles)
        {
            particle.Play();
        }
        fadeTweenImg.Play();
        fadeTweenTxt.Play();
    }

    public void AnimClose()
    {
        fadeTweenImg.Kill();
        fadeTweenTxt.Kill();
        noticeIcon.SetActive(false);
        foreach (Image image in images)
        {
            fadeTweenImg.Join(image.DOFade(0, 0.3f));
        }
        foreach (TextMeshProUGUI text in texts)
        {
            fadeTweenTxt.Join(text.DOFade(0, 0.3f));
        }
        foreach (ParticleSystem particle in particles)
        {
            particle.Stop(true, ParticleSystemStopBehavior.StopEmittingAndClear);
        }
        fadeTweenImg.Play();
        fadeTweenTxt.Play();
        delayCloseTween?.Kill();
        delayCloseTween = DOVirtual.DelayedCall(0.3f, () => gameObject.SetActive(false));

    }

    public void OnClickFreeGift()
    {
       

        if (GameUtils.Free_Gift_Claim_Times == 0)
        {
            CollectingSystem.Instance.CollectCoin(50, freeGift, HomeManager.Instance.coinGiftVFXpos);
           
          
        }
        else
        {
            GameUtils.TimeStartAds = Convert.ToString(DateTime.Now, CultureInfo.InvariantCulture);


            CollectingSystem.Instance.CollectCoin(50, freeGift, HomeManager.Instance.coinGiftVFXpos);
            GameUtils.Heart++;
            HomeManager.Instance.UpdateHeart();
            GameUtils.Free_Gift_Claim_Times++;
           
        }
    }
}
