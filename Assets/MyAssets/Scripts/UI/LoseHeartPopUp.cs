using DG.Tweening;
using Do;
using Do.Scripts.Loading;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;


using System;
using System.Globalization;

public class LoseHeartPopUp : PopUpBase
{
    [SerializeField] ButtonScaleAnimation btnRetry;
    [SerializeField] ButtonScaleAnimation btnQuit;
    [SerializeField] Transform titleParent;
    public bool isOpenByKeeplaying = false;
    public void Init(bool isQuit = false)
    {
        if (isQuit)
        {
            btnRetry.gameObject.SetActive(false);
            btnQuit.gameObject.SetActive(true);
        }
        else
        {
            btnQuit.gameObject.SetActive(false);
            btnRetry.gameObject.SetActive(true);
        }
        SetTextLose(false);
    }
    public void SetTextLose(bool isLose = false)
    {
        if (isLose)
        {
            titleParent.GetChild(0).gameObject.SetActive(false);
            titleParent.GetChild(1).gameObject.SetActive(true);
        }
        else
        {
            titleParent.GetChild(0).gameObject.SetActive(true);
            titleParent.GetChild(1).gameObject.SetActive(false);
        }
    }
    public void OnClickRetry()
    {
        btnRetry.enabled = false;
        btnQuit.enabled = false;
        base.Close();
        if (GameUtils.Heart > 0 )
        {
            AudioManager.Instance.Play(MusicType.Gameplay);
            GameManager.Instance.ReplayLevel();

        }
        else
        {
            DOVirtual.DelayedCall(0.35f, () => {
                UIManager.Instance.OpenRefillHeartPopUp();
                if (isOpenByKeeplaying)
                    UIManager.Instance.RegisterRefillCloseEvent();
            });
        }
    }
    public void OnClickQuit()
    {
        isOpenByKeeplaying = true;
        Close();
    }

    public override void Open()
    {
        isOpenByKeeplaying = false;
        base.Open();
        btnRetry.enabled = true;
        btnQuit.enabled = true;
       
    }

    public override void Close()
    {
        btnRetry.enabled = false;
        btnQuit.enabled = false;
        base.Close();
        if (isOpenByKeeplaying)
        {
         

            //LUNA
        }
     
    }
}
