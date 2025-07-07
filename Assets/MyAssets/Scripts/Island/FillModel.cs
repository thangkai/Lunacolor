using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FillModel : MonoBehaviour
{
    private Material fillMat;
    private const string fillPropertyName = "_Fill_Percent";
    private Material fillMaterialInstance;
    private float fillPercent = 0f;
    //private float meshHeight = 1f;
    private float yMin;
    private float yMax;

    public void Init(float fillAmount, float height = 0)
    {
        fillMat = GetComponentInParent<IslandManager>().fillMat;
        MeshRenderer renderer = GetComponent<MeshRenderer>();
        Material[] mats = renderer.materials;

        //fillMaterialInstance = new Material(fillMat);
        fillMaterialInstance = mats[0];
        //Texture baseTexture = mats[0].GetTexture("_BaseMap");
        //fillMaterialInstance.SetTexture("_Texture2D", baseTexture);
        //fillMaterialInstance.CopyPropertiesFromMaterial(mats[0]);

        //Material[] newMats = new Material[mats.Length + 1];

        //for (int i = 0; i < mats.Length; i++)
        //{
        //    newMats[i] = mats[i];
        //}
        //newMats[mats.Length] = fillMaterialInstance;
        //renderer.materials = newMats;
        renderer.materials = mats;

        Mesh mesh = GetComponent<MeshFilter>().sharedMesh;
        Vector3[] vertices = mesh.vertices;
        yMin = float.MaxValue;
        yMax = float.MinValue;

        foreach (Vector3 v in vertices)
        {
            if (v.y < yMin) yMin = v.y;
            if (v.y > yMax) yMax = v.y * 1.05f;
        }
        SetViewByFillAmout(fillAmount);

    }

    public void DoFill(float maxPoint)
    {
        if (fillPercent >= 1) return;
        fillPercent = GameUtils.Cur_Island_Point / maxPoint;
        //fillPercent = Mathf.Clamp01(fillPercent);
        SetViewByFillAmout(fillPercent);
    }

    private void SetViewByFillAmout(float fillAmount, bool isSub = false)
    {
        if (fillMaterialInstance == null) return;

        float shaderValue = Mathf.Lerp(yMin, yMax, fillAmount);

        fillMaterialInstance.SetFloat(fillPropertyName, shaderValue);

    }
}
