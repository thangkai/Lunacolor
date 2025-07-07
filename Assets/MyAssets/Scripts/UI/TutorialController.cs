using DG.Tweening;
using Do;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class TutorialController : Singleton<TutorialController>
{
    [SerializeField] TextMeshProUGUI tutText;
    [SerializeField] Animator tutHand;
    [SerializeField] List<Sprite> tutSprites = new List<Sprite>();
    [SerializeField] Image tutTextImg;
    [SerializeField] GameObject closeBtn;
    [SerializeField] List<int> indexTut = new List<int>() {6, 12, 15, 16, 25, 35, 45, 60, 75, 90, 110, 130 };
    public Tween filterTween;

    protected override void Awake()
    {
        base.Awake();
    }
    protected override void OnDestroy()
    {
        base.OnDestroy();
    }
    public void SuggestByClick(Vector3 position)
    {
        tutHand.gameObject.SetActive(true);
        FadeInHandTut();
        tutHand.transform.localPosition = position;
        tutHand.Play("HandTut");
    }
    public void SuggestByText(string text)
    {
        tutText.gameObject.SetActive(true);
        tutText.GetComponent<RectTransform>(). anchoredPosition = new Vector2(0, -500 * GameConfig.Instance.RatioScaleScreen);
        FadeInTextTut();
        tutText.DOFade(1, 0);
        tutText.text = text;
    }
    public void FadeInHandTut()
    {
        tutHand.GetComponent<Image>().DOFade(1, 0.3f);
    }
    public void FadeOutHandTut()
    {
        tutHand.GetComponent<Image>().DOFade(0, 0.3f);
    }
    public void FadeInTextTut()
    {
        tutText.DOFade(1, 0.3f);
    }
    public void FadeOutTutText()
    {
        tutText.DOFade(0, 0.3f);
    }
    public void OpenTutorial()
    {
        int index = indexTut.IndexOf(GameUtils.Level);
        tutTextImg.sprite = tutSprites[index];
        transform.GetChild(1).gameObject.SetActive(true);  
        transform.GetChild(1).GetComponent<Image>().DOFade(0, 0);
        tutTextImg.DOFade(0, 0);
        closeBtn.GetComponent<Image>().DOFade(0, 0);
        GameManager.Instance.IsAction = false;
        if (GameManager.Instance != null)
        {
            GameManager.Instance.IsTutShow = true;
            GameManager.Instance.listOpenPopUp.Add(gameObject);
        }
        if (GameUtils.Level is 6 or 12 or 16)
        {
            closeBtn.SetActive(false);
            GameManager.Instance.IsTutShow = false;
            BoosterController.Instance.SetBoosterInTut(GameUtils.Level / 8, true);
            transform.GetChild(1).GetComponent<Button>().interactable = false;
        }
        else
        {
            closeBtn.SetActive(true);
            transform.GetChild(1).GetComponent<Button>().interactable = true;
        }
        LevelManager.Instance.MoveObjFrontOfUI();
        transform.GetChild(1).GetComponent<Image>().DOFade(250/255f, 0.5f);
        tutTextImg.GetComponent<Image>().DOFade(1f, 0.5f);
        closeBtn.GetComponent<Image>().DOFade(1, 0.5f);
    }

    public void CloseTutorial()
    {
        if (GameUtils.Level is 6 or 12 or 16)
            BoosterController.Instance.SetBoosterInTut(GameUtils.Level / 8, false);
        transform.GetChild(1).GetComponent<Image>().DOFade(0, 0.5f);
        tutTextImg.DOFade(0, 0.5f);
        if (GameManager.Instance != null && GameManager.Instance.listOpenPopUp.Contains(gameObject))
        {
            GameManager.Instance.listOpenPopUp.Remove(gameObject);
        }
        closeBtn.GetComponent<Image>().DOFade(0, 0.5f).OnComplete(() =>
        {
            transform.GetChild(1).gameObject.SetActive(false);
            GameManager.Instance.IsTutShow = false;
            GameManager.Instance.disableUI = false;
        });
        filterTween = DOVirtual.DelayedCall(0.5f, () =>
        {
            LevelManager.Instance.MoveObjBackOfUI();
        });
    }
}
