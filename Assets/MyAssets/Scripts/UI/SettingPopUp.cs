using DG.Tweening;
using Do;
using System;
using System.Globalization;
using UnityEngine;


public class SettingPopUp : PopUpBase
{
    [SerializeField] Transform soundBtn, musicBtn, vibrateBtn;
    public void OnClickSound()
    {
        AudioManager.Instance.Sound = !AudioManager.Instance.Sound;
        soundBtn.GetChild(1).gameObject.SetActive(!AudioManager.Instance.Sound);
    }

    public void OnClickMusic()
    {
        AudioManager.Instance.Music = !AudioManager.Instance.Music;
        musicBtn.GetChild(1).gameObject.SetActive(!AudioManager.Instance.Music);
    }

    public void OnClickVibrate()
    {
        AudioManager.Instance.Vibration = !AudioManager.Instance.Vibration;
        vibrateBtn.GetChild(1).gameObject.SetActive(!AudioManager.Instance.Vibration);
    }

    public override void Open()
    {
        soundBtn.GetChild(1).gameObject.SetActive(!AudioManager.Instance.Sound);
        musicBtn.GetChild(1).gameObject.SetActive(!AudioManager.Instance.Music);
        vibrateBtn.GetChild(1).gameObject.SetActive(!AudioManager.Instance.Vibration);
        
        base.Open();
    }
    public void OnClickHome()
    {
        Close();
        DOVirtual.DelayedCall(0.5f, () => UIManager.Instance.OpenLoseHeartPopUp(true));
    }
    public void OnClickPrivacy()
    {
      //  Application.OpenURL(RootManager.Instance.privacyUrl);
    }
    public void OnClickRate()
    {
#if UNITY_EDITOR
        Application.OpenURL("https://play.google.com/store/apps/details?id=com.boltsort.stackpuzzle.nutsort");
#elif UNITY_ANDROID
        Application.OpenURL("market://details?id=com.boltsort.stackpuzzle.nutsort");
#else
        Application.OpenURL("https://play.google.com/store/apps/details?id=com.boltsort.stackpuzzle.nutsort");
#endif
    }
    public override void Close()
    {
       
        base.Close();
    }
}
