using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class CityCompletePopUp : PopUpBase
{
    [SerializeField] RectTransform coinGift;
    [SerializeField] RectTransform boosterGift;
    [SerializeField] Image boosterIcon;
    [SerializeField] List<Sprite> boosterSprites;
    int key;
    bool isClaim = false;
    public void Init()
    {
        key = Random.Range(0, 3);
        boosterIcon.sprite = boosterSprites[key];
        boosterIcon.SetNativeSize();
        isClaim = false;
    }
    public void OnClickClaim()
    {
        if (isClaim)
            return;
        isClaim = true;
        if (key == 0)
        {
            GameUtils.Undo_Booster++;
          
            //CollectingSystem.Instance.CollectBooster(1, boosterGift, HomeManager.Instance.boosterGiftVFXpos);
        }
        else if (key == 1)
        {
            GameUtils.Fill_Hol_Booster++;
          
            //CollectingSystem.Instance.CollectBooster(10, boosterGift, HomeManager.Instance.boosterGiftVFXpos);
        }
        else if (key == 2)
        {
            GameUtils.Add_Hol_Booster++;
          
            //CollectingSystem.Instance.CollectBooster(100, boosterGift, HomeManager.Instance.boosterGiftVFXpos);
        }
        base.Close();
        DOVirtual.DelayedCall(0.5f, () =>
        {
            HomeManager.Instance.mainMenu.OnClickNext();
            HomeManager.Instance.mainMenu.OnClickCloseCity();
            DOVirtual.DelayedCall(0.5f, () =>
            {
                CollectingSystem.Instance.CollectCoin(300, coinGift, HomeManager.Instance.coinGiftVFXpos);
              
            });
        });
    }
}
