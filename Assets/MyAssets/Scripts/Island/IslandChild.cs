using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class IslandChild : MonoBehaviour
{
    public int level;
    public int pointRequire;
    public Transform pointNumPos;
    public Transform targetAnimPos;
    [SerializeField] List<GameObject> enviromentObjs = new List<GameObject>();
    [SerializeField] List<ParticleSystem> vfxs = new List<ParticleSystem>();
    [SerializeField] List<FillModel> models = new List<FillModel>();

    public void UpgradeChildIsLand()
    {
        if (GameUtils.Cur_Island_Point >= 0)
        {
            foreach (var sub in models)
            {
                sub.DoFill(pointRequire);
            }
            if (GameUtils.Cur_Island_Point >= pointRequire)
            {
                GameUtils.Cur_Island_Point++;
                foreach (var obj in enviromentObjs)
                {
                    obj.gameObject.SetActive(true);
                }
                foreach (var vfx in vfxs)
                {
                    vfx.Play();
                    ParticleSystem.MainModule main = vfx.main;
                    main.playOnAwake = true;
                    //vfx.main = main;
                }
            }
        }

    }

    public void Init(bool isDone = false)
    {
        foreach (Transform child in transform)
        {
            models.Add(child.GetComponent<FillModel>());
        }
        if (GameUtils.Level_Child_Island > level - 1 || isDone)
        {
            foreach (var sub in models)
            {
                sub.Init(1);
            }
            foreach (var obj in enviromentObjs)
            {
                obj.gameObject.SetActive(true);
            }
            foreach (var vfx in vfxs)
            {
                vfx.Play();
                ParticleSystem.MainModule main = vfx.main;
                main.playOnAwake = true;
            }
        }
        else if (GameUtils.Level_Child_Island < level - 1)
        {
            foreach (var sub in models)
            {
                sub.Init(0);
            }
        }
        else
        {
            foreach (var sub in models)
            {
                sub.Init(GameUtils.Cur_Island_Point /(float) pointRequire);
            }
        }
    }
    public void PlayAnimationFill()
    {
        GetComponentInChildren<Animation>().Play();
    }
}
