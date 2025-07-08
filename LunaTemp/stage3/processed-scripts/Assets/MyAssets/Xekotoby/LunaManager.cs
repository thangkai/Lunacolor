
using UnityEngine;

public class LunaManager : MonoBehaviour
{
    public void OnPlayButtonClick()
    {
        Debug.Log("Play");
        Luna.Unity.Playable.InstallFullGame();
        Luna.Unity.LifeCycle.GameEnded();
    }

    private void OnEnable()
    {
        Luna.Unity.LifeCycle.OnPause += PauseGameplay;
        Luna.Unity.LifeCycle.OnResume += ResumeGameplay;
    }

    private void OnDisable()
    {
        Luna.Unity.LifeCycle.OnPause -= PauseGameplay;
        Luna.Unity.LifeCycle.OnResume -= ResumeGameplay;
    }


    private void ResumeGameplay()
    {
        Time.timeScale = 1f;
    }

    private void PauseGameplay()
    {
        Time.timeScale = 0;
    }
}
