using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Do;
using DG.Tweening;
using System.Globalization;
using System;
using Do.Scripts.Loading;

using Xekotoby;

public class GameManager : Singleton<GameManager>
{
    public bool IsWin = false;
    public bool IsLose = false;
    public bool IsAction = false;
    public bool delayCheckLose = false;
    public bool disableUI = false;
    public bool IsTutShow = false;
    public List<GameObject> listOpenPopUp = new List<GameObject>();


    public int level;
    public int typeLevel;

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
        Do.AudioManager.Instance.Play(MusicType.Gameplay);
        SetGameView();
        StartLevel();
    }
    void LateUpdate()
    {
      

        if (Input.GetMouseButtonDown(0))
        {

            //if (!CheckCanAction() && !IsTutShow)
            //if (!CheckCanAction())
            //{
            //    Debug.LogError("vao day");
            //    return;
            //}
            Vector3 touchPosition;

            if (Input.touchCount > 0)
            {
                
                touchPosition = Input.GetTouch(0).position;
            }
            else
            {
           
                touchPosition = Input.mousePosition;
            }

            Ray ray = Camera.main.ScreenPointToRay(touchPosition);
            RaycastHit hit;

            if (Physics.Raycast(ray, out hit))
            {
                Debug.LogError(hit.collider.gameObject.name);
                if (hit.collider.gameObject.layer == LayerMask.NameToLayer("Screw"))
                {
                    hit.collider.gameObject.GetComponent<Screw>().OnClick();
                    if (GameUtils.Level == 1)
                    {
                        LevelManager.Instance.ResetTutHand_1();
                    }
                    else if (LevelManager.Instance.isTutUndo)
                    {
                        IsAction = true;
                        LevelManager.Instance.KillTweenTut6();
                        TutorialController.Instance.FadeOutHandTut();
                    }
                }
            }
        }
    }
    public void SetGameView()
    {
        LevelManager.Instance.SetGameView(1 / GameConfig.Instance.RatioScaleScreen);
    }
    public bool CheckCanAction()
    {
        return !IsWin && !IsLose && !IsAction && !BoosterController.Instance.isFillingHolder && listOpenPopUp.Count == 0;
    }
    public void ResetState()
    {
        IsWin = false;
        IsLose = false;
        IsAction = false;
        listOpenPopUp.Clear();
        delayCheckLose = false;
    }
    public void SetWin()
    {
        if (IsWin) return;
        IsWin = true;
        Debug.LogError("WIN");
        GameUtils.Win_Streak++;

            disableUI = true;
            DOVirtual.DelayedCall(1.5f, () =>
            {
                disableUI = false;
                UIManager.Instance.OpenWinPopUp();



            });
        
    }
    public void SetLose()
    {
        Debug.LogError("sET LOSE");
        if (IsLose) return;
        IsLose = true;
        Debug.Log("LOSE");
        disableUI = true;
        GameUtils.Times_Lose_Level++;
        DOVirtual.DelayedCall(0.5f, () =>
        {
            disableUI = false;
            UIManager.Instance.OpenLosePopUp();
        });
    }
    public void StartLevel()
    {
        LevelManager.Instance.InitLevel( );
        GameUtils.Times_Play_Level++;
        GameUtils.Play_Type = "Home";
        GameUtils.TimeStartLevel = Convert.ToString(DateTime.Now, CultureInfo.InvariantCulture);
        
    }
    public void NextLevel()
    {
        LevelManager.Instance.NextLevel();
        GameUtils.Times_Play_Level++;
        GameUtils.Play_Type = "Next";
        GameUtils.TimeStartLevel = Convert.ToString(DateTime.Now, CultureInfo.InvariantCulture);
       
    }
    public void ReplayLevel()
    {
        //LevelManager.Instance.InitLevel(true);
        GameUtils.Times_Play_Level++;
        GameUtils.Play_Type = "Replay";
        
    }
    public void KeepPlayingLevel()
    {
        ResetState();
        GameUtils.Times_Keep_playing++;
        LevelManager.Instance.KeepPlayingLevel();
    }
}

public enum Gameplay_Feature
{
    Hidden_Nut = 0,
    Rope = 1,
    Screw_10x = 2,
    Glass = 3,
    Ice_Nut = 4,
    Bomb_Nut = 5,
    Star_Nut = 6,
    Box = 7,
    Flower_Nut = 8,
}
