using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using Do;
using UnityEngine;
using Random = UnityEngine.Random;

public class CollectingSystem : Singleton<CollectingSystem>
{
    [SerializeField] private RectTransform coinPrefab;
    [SerializeField] private RectTransform heartPrefab;
    [SerializeField] private RectTransform infiHeartPrefab;
    [SerializeField] private List<RectTransform> boosterIconPrefabs = new List<RectTransform>();
    [SerializeField] private List<RectTransform> coins;
    [SerializeField] private List<RectTransform> hearts;
    [SerializeField] private Vector2 v;
    [SerializeField] private int count;

    // private int _amount;
    private IEnumerator _ieCollect;
    private WaitForSeconds _second;

    // public int amountTest;
    // public RectTransform targetTest;

    private void Start()
    {
        coins = new List<RectTransform>();
        hearts = new List<RectTransform>();
        for (int i = 0; i < 10; i++)
        {
            RectTransform coin = Instantiate(coinPrefab, transform);
            coins.Add(coin);
            if (heartPrefab != null)
            {
                RectTransform heart = Instantiate(heartPrefab, transform);
                hearts.Add(heart);
            }
        }
    }

    // private void Update()
    // {
    //     if (Input.GetKeyDown(KeyCode.Space))
    //     {
    //         Debug.LogError("Test");
    //         Init(amountTest, targetTest);
    //     }
    // }

    // public void Init(int amount)
    // {
    //     _amount = amount;
    // }

    public void CollectCoin(int amount, RectTransform initPos, RectTransform target)
    {
        if (amount <= 0) return;
        count = amount / 10;
        _ieCollect = IeCollectCoin(initPos, target);
        _second = new WaitForSeconds(0.3f);
        StartCoroutine(_ieCollect);
        // _amount = 0;
    }
    public void CollectBooster(int countKey, RectTransform initPos, RectTransform target)
    {
        if (countKey <= 0) return;
        _ieCollect = IeCollectBooster(countKey, initPos, target);
        _second = new WaitForSeconds(0.3f);
        StartCoroutine(_ieCollect);
    }
    public void CollectHeart(int amount, RectTransform initPos, RectTransform target)
    {
        if (amount <= 0) return;
        count = amount <= 10 ? 10 : amount / 10;
        _ieCollect = IeCollectHeart(initPos, target);
        _second = new WaitForSeconds(0.3f);
        StartCoroutine(_ieCollect);
        // _amount = 0;
    }

    private IEnumerator IeCollectCoin(RectTransform initPos, RectTransform target)
    {
        AudioManager.Instance.Play(SoundType.Coin_Collect);
        for (int i = 0; i < coins.Count; i++)
        {
            coins[i].gameObject.SetActive(true);
            coins[i].transform.position = initPos.position;
            coins[i].DOMove(initPos.position + new Vector3(Random.Range(-v.x, v.x), Random.Range(-v.y, v.y)), 0.25f).SetEase(Ease.OutBack);
        }

        yield return _second;
        for (int i = 0; i < coins.Count; i++)
        {
            var ii = i;
            AudioManager.Instance.Play(SoundType.Coin_Collect);
            coins[i].DOMove(target.position, 0.5f).OnComplete(() =>
            {
                VibrationUtil.Vibrate(10);
                coins[ii].localPosition = Vector3.zero;
                coins[ii].gameObject.SetActive(false);
                GameUtils.Coin += count;
                if (UIManager.Instance != null)
                    UIManager.Instance.UpdateCoin();
                else if (HomeManager.Instance != null)
                    HomeManager.Instance.UpdateCoin();
            });
            yield return new WaitForSeconds(0.02f);
        }
    }
    private IEnumerator IeCollectBooster(int countKey, RectTransform initPos, RectTransform target)
    {
        AudioManager.Instance.Play(SoundType.Coin_Collect);
        List<RectTransform> listPrefab = new List<RectTransform>();
        for (int i = 0; i < 3; i++)
        {
            if (countKey % 10 == 1)
                listPrefab.Add(boosterIconPrefabs[i]);
            countKey /= 10;
        }


        for (int i = 0; i < listPrefab.Count; i++)
        {
            listPrefab[i].gameObject.SetActive(true);
            listPrefab[i].transform.position = initPos.position;
            listPrefab[i].DOMove(initPos.position + new Vector3(Random.Range(-v.x, v.x), Random.Range(-v.y, v.y)), 0.25f).SetEase(Ease.OutBack);
        }

        yield return _second;
        for (int i = 0; i < listPrefab.Count; i++)
        {
            var ii = i;
            listPrefab[i].DOMove(target.position, 0.5f).OnComplete(() =>
            {
                listPrefab[ii].localPosition = Vector3.zero;
                listPrefab[ii].gameObject.SetActive(false);
            });
            yield return new WaitForSeconds(0.02f);
        }
    }
    private IEnumerator IeCollectHeart(RectTransform initPos, RectTransform target)
    {
        AudioManager.Instance.Play(SoundType.Coin_Collect);
        for (int i = 0; i < hearts.Count; i++)
        {
            hearts[i].gameObject.SetActive(true);
            hearts[i].transform.position = initPos.position;
            hearts[i].DOMove(initPos.position + new Vector3(Random.Range(-v.x, v.x), Random.Range(-v.y, v.y)), 0.25f).SetEase(Ease.OutBack);
        }

        yield return _second;
        for (int i = 0; i < hearts.Count; i++)
        {
            var ii = i;
            hearts[i].DOMove(target.position, 0.5f).OnComplete(() =>
            {
                hearts[ii].localPosition = Vector3.zero;
                hearts[ii].gameObject.SetActive(false);
                GameUtils.Heart += count;
                if (HomeManager.Instance != null)
                    HomeManager.Instance.UpdateHeart();
            });
            yield return new WaitForSeconds(0.02f);
        }
    }
}