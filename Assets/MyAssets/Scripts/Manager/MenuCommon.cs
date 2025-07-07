using Do;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MenuCommon : MonoBehaviour
{
    public List<ButtonNavigation> btnNavigators = new List<ButtonNavigation>();
    public int curTabKey = 1;
    public GameObject iconNotice;
    private void Start()
    {
        InitNavigations();
    }
    public void InitNavigations()
    {
        curTabKey = 1;
        //AnimActiveTab();
        //SetLockTab(2);
        //InactiveAllAnimator();
        for (int i = 0; i < btnNavigators.Count; i++)
        {
            btnNavigators[i].Init(i);
        }
    }

    public void OnClickShop()
    {
        if (curTabKey == 0) return;
        AudioManager.Instance.Play(SoundType.Click_UI);
        //ActiveAllAnimator();
        //HomeManager.Instance.OpenShopTab();
        //AnimUnactiveTab();
        curTabKey = 0;
        //AnimActiveTab();
        //InactiveAllAnimator();
        btnNavigators[0].InactiveToActive();
        btnNavigators[1].ActiveToInactive();
        iconNotice.gameObject.SetActive(false);
        HomeManager.Instance.OpenShopTab();
    }
    public void OnClickHome()
    {
        if (curTabKey == 1) return;
        AudioManager.Instance.Play(SoundType.Click_UI);
        //ActiveAllAnimator();
        //HomeManager.Instance.CloseShopTab();
        //AnimUnactiveTab();
        curTabKey = 1;
        //AnimActiveTab();
        //InactiveAllAnimator();
        btnNavigators[1].InactiveToActive();
        btnNavigators[0].ActiveToInactive();
    
        HomeManager.Instance.CloseShopTab();
    }
    public void OnClickDailyChallenge()
    {
        //ActiveAllAnimator();
        //AnimShakeLock(2);
        //InactiveAllAnimator();
        btnNavigators[2].ShakeLock();
    }
    public void EnableNoticeShop()
    {
        iconNotice.SetActive(true);
    }

    public void DisableNoticeShop()
    { 
        iconNotice.SetActive(false);
    }
    //public void AnimUnLockTab(int tabKey)
    //{
    //    naviAnimators[tabKey].SetTrigger("unlock");
    //}
    //public void SetLockTab(int tabKey)
    //{
    //    naviAnimators[tabKey].SetBool("isLock", true);
    //}
    //public void AnimActiveTab()
    //{
    //    naviAnimators[curTabKey].SetBool("isOn", true);
    //}
    //public void AnimUnactiveTab()
    //{
    //    naviAnimators[curTabKey].SetBool("isOn", false);
    //}
    //public void AnimShakeLock(int tabKey)
    //{
    //    naviAnimators[tabKey].SetTrigger("shakeLock");
    //}
}
