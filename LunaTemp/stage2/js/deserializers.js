var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.JointSpring' )
  var i761 = data
  i760.spring = i761[0]
  i760.damper = i761[1]
  i760.targetPosition = i761[2]
  return i760
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.JointMotor' )
  var i763 = data
  i762.m_TargetVelocity = i763[0]
  i762.m_Force = i763[1]
  i762.m_FreeSpin = i763[2]
  return i762
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.JointLimits' )
  var i765 = data
  i764.m_Min = i765[0]
  i764.m_Max = i765[1]
  i764.m_Bounciness = i765[2]
  i764.m_BounceMinVelocity = i765[3]
  i764.m_ContactDistance = i765[4]
  i764.minBounce = i765[5]
  i764.maxBounce = i765[6]
  return i764
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.JointDrive' )
  var i767 = data
  i766.m_PositionSpring = i767[0]
  i766.m_PositionDamper = i767[1]
  i766.m_MaximumForce = i767[2]
  return i766
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i769 = data
  i768.m_Spring = i769[0]
  i768.m_Damper = i769[1]
  return i768
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i771 = data
  i770.m_Limit = i771[0]
  i770.m_Bounciness = i771[1]
  i770.m_ContactDistance = i771[2]
  return i770
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i773 = data
  i772.m_ExtremumSlip = i773[0]
  i772.m_ExtremumValue = i773[1]
  i772.m_AsymptoteSlip = i773[2]
  i772.m_AsymptoteValue = i773[3]
  i772.m_Stiffness = i773[4]
  return i772
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i775 = data
  i774.m_LowerAngle = i775[0]
  i774.m_UpperAngle = i775[1]
  return i774
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i776 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i777 = data
  i776.m_MotorSpeed = i777[0]
  i776.m_MaximumMotorTorque = i777[1]
  return i776
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i778 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i779 = data
  i778.m_DampingRatio = i779[0]
  i778.m_Frequency = i779[1]
  i778.m_Angle = i779[2]
  return i778
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i780 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i781 = data
  i780.m_LowerTranslation = i781[0]
  i780.m_UpperTranslation = i781[1]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i783 = data
  i782.position = new pc.Vec3( i783[0], i783[1], i783[2] )
  i782.scale = new pc.Vec3( i783[3], i783[4], i783[5] )
  i782.rotation = new pc.Quat(i783[6], i783[7], i783[8], i783[9])
  return i782
}

Deserializers["Do.AudioManager"] = function (request, data, root) {
  var i784 = root || request.c( 'Do.AudioManager' )
  var i785 = data
  var i787 = i785[0]
  var i786 = new (System.Collections.Generic.List$1(Bridge.ns('Do.AudioMusic')))
  for(var i = 0; i < i787.length; i += 1) {
    i786.add(request.d('Do.AudioMusic', i787[i + 0]));
  }
  i784.musicClipSource = i786
  var i789 = i785[1]
  var i788 = new (System.Collections.Generic.List$1(Bridge.ns('Do.AudioSound')))
  for(var i = 0; i < i789.length; i += 1) {
    i788.add(request.d('Do.AudioSound', i789[i + 0]));
  }
  i784.soundClipSource = i788
  return i784
}

Deserializers["Do.AudioMusic"] = function (request, data, root) {
  var i792 = root || request.c( 'Do.AudioMusic' )
  var i793 = data
  i792.musicType = i793[0]
  return i792
}

Deserializers["Do.AudioSound"] = function (request, data, root) {
  var i796 = root || request.c( 'Do.AudioSound' )
  var i797 = data
  i796.soundType = i797[0]
  i796.duration = i797[1]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i799 = data
  request.r(i799[0], i799[1], 0, i798, 'clip')
  request.r(i799[2], i799[3], 0, i798, 'outputAudioMixerGroup')
  i798.playOnAwake = !!i799[4]
  i798.loop = !!i799[5]
  i798.time = i799[6]
  i798.volume = i799[7]
  i798.pitch = i799[8]
  i798.enabled = !!i799[9]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i801 = data
  i800.name = i801[0]
  i800.tagId = i801[1]
  i800.enabled = !!i801[2]
  i800.isStatic = !!i801[3]
  i800.layer = i801[4]
  return i800
}

Deserializers["LunaManager"] = function (request, data, root) {
  var i802 = root || request.c( 'LunaManager' )
  var i803 = data
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i805 = data
  i804.name = i805[0]
  i804.width = i805[1]
  i804.height = i805[2]
  i804.mipmapCount = i805[3]
  i804.anisoLevel = i805[4]
  i804.filterMode = i805[5]
  i804.hdr = !!i805[6]
  i804.format = i805[7]
  i804.wrapMode = i805[8]
  i804.alphaIsTransparency = !!i805[9]
  i804.alphaSource = i805[10]
  i804.graphicsFormat = i805[11]
  i804.sRGBTexture = !!i805[12]
  i804.desiredColorSpace = i805[13]
  i804.wrapU = i805[14]
  i804.wrapV = i805[15]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i806 = root || new pc.UnityMaterial()
  var i807 = data
  i806.name = i807[0]
  request.r(i807[1], i807[2], 0, i806, 'shader')
  i806.renderQueue = i807[3]
  i806.enableInstancing = !!i807[4]
  var i809 = i807[5]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i809[i + 0]) );
  }
  i806.floatParameters = i808
  var i811 = i807[6]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i811[i + 0]) );
  }
  i806.colorParameters = i810
  var i813 = i807[7]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i813[i + 0]) );
  }
  i806.vectorParameters = i812
  var i815 = i807[8]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i815[i + 0]) );
  }
  i806.textureParameters = i814
  var i817 = i807[9]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i817[i + 0]) );
  }
  i806.materialFlags = i816
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i821 = data
  i820.name = i821[0]
  i820.value = i821[1]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i825 = data
  i824.name = i825[0]
  i824.value = new pc.Color(i825[1], i825[2], i825[3], i825[4])
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i829 = data
  i828.name = i829[0]
  i828.value = new pc.Vec4( i829[1], i829[2], i829[3], i829[4] )
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i833 = data
  i832.name = i833[0]
  request.r(i833[1], i833[2], 0, i832, 'value')
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i837 = data
  i836.name = i837[0]
  i836.enabled = !!i837[1]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i839 = data
  i838.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i839[0], i838.main)
  i838.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i839[1], i838.colorBySpeed)
  i838.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i839[2], i838.colorOverLifetime)
  i838.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i839[3], i838.emission)
  i838.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i839[4], i838.rotationBySpeed)
  i838.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i839[5], i838.rotationOverLifetime)
  i838.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i839[6], i838.shape)
  i838.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i839[7], i838.sizeBySpeed)
  i838.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i839[8], i838.sizeOverLifetime)
  i838.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i839[9], i838.textureSheetAnimation)
  i838.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i839[10], i838.velocityOverLifetime)
  i838.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i839[11], i838.noise)
  i838.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i839[12], i838.inheritVelocity)
  i838.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i839[13], i838.forceOverLifetime)
  i838.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i839[14], i838.limitVelocityOverLifetime)
  i838.useAutoRandomSeed = !!i839[15]
  i838.randomSeed = i839[16]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i840 = root || new pc.ParticleSystemMain()
  var i841 = data
  i840.duration = i841[0]
  i840.loop = !!i841[1]
  i840.prewarm = !!i841[2]
  i840.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[3], i840.startDelay)
  i840.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[4], i840.startLifetime)
  i840.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[5], i840.startSpeed)
  i840.startSize3D = !!i841[6]
  i840.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[7], i840.startSizeX)
  i840.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[8], i840.startSizeY)
  i840.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[9], i840.startSizeZ)
  i840.startRotation3D = !!i841[10]
  i840.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[11], i840.startRotationX)
  i840.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[12], i840.startRotationY)
  i840.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[13], i840.startRotationZ)
  i840.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i841[14], i840.startColor)
  i840.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[15], i840.gravityModifier)
  i840.simulationSpace = i841[16]
  request.r(i841[17], i841[18], 0, i840, 'customSimulationSpace')
  i840.simulationSpeed = i841[19]
  i840.useUnscaledTime = !!i841[20]
  i840.scalingMode = i841[21]
  i840.playOnAwake = !!i841[22]
  i840.maxParticles = i841[23]
  i840.emitterVelocityMode = i841[24]
  i840.stopAction = i841[25]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i842 = root || new pc.MinMaxCurve()
  var i843 = data
  i842.mode = i843[0]
  i842.curveMin = new pc.AnimationCurve( { keys_flow: i843[1] } )
  i842.curveMax = new pc.AnimationCurve( { keys_flow: i843[2] } )
  i842.curveMultiplier = i843[3]
  i842.constantMin = i843[4]
  i842.constantMax = i843[5]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i844 = root || new pc.MinMaxGradient()
  var i845 = data
  i844.mode = i845[0]
  i844.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i845[1], i844.gradientMin)
  i844.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i845[2], i844.gradientMax)
  i844.colorMin = new pc.Color(i845[3], i845[4], i845[5], i845[6])
  i844.colorMax = new pc.Color(i845[7], i845[8], i845[9], i845[10])
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i847 = data
  i846.mode = i847[0]
  var i849 = i847[1]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i849[i + 0]) );
  }
  i846.colorKeys = i848
  var i851 = i847[2]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i851[i + 0]) );
  }
  i846.alphaKeys = i850
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i852 = root || new pc.ParticleSystemColorBySpeed()
  var i853 = data
  i852.enabled = !!i853[0]
  i852.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i853[1], i852.color)
  i852.range = new pc.Vec2( i853[2], i853[3] )
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i857 = data
  i856.color = new pc.Color(i857[0], i857[1], i857[2], i857[3])
  i856.time = i857[4]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i861 = data
  i860.alpha = i861[0]
  i860.time = i861[1]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i862 = root || new pc.ParticleSystemColorOverLifetime()
  var i863 = data
  i862.enabled = !!i863[0]
  i862.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i863[1], i862.color)
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i864 = root || new pc.ParticleSystemEmitter()
  var i865 = data
  i864.enabled = !!i865[0]
  i864.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i865[1], i864.rateOverTime)
  i864.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i865[2], i864.rateOverDistance)
  var i867 = i865[3]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i867[i + 0]) );
  }
  i864.bursts = i866
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i870 = root || new pc.ParticleSystemBurst()
  var i871 = data
  i870.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i871[0], i870.count)
  i870.cycleCount = i871[1]
  i870.minCount = i871[2]
  i870.maxCount = i871[3]
  i870.repeatInterval = i871[4]
  i870.time = i871[5]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i872 = root || new pc.ParticleSystemRotationBySpeed()
  var i873 = data
  i872.enabled = !!i873[0]
  i872.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i873[1], i872.x)
  i872.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i873[2], i872.y)
  i872.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i873[3], i872.z)
  i872.separateAxes = !!i873[4]
  i872.range = new pc.Vec2( i873[5], i873[6] )
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i874 = root || new pc.ParticleSystemRotationOverLifetime()
  var i875 = data
  i874.enabled = !!i875[0]
  i874.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[1], i874.x)
  i874.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[2], i874.y)
  i874.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[3], i874.z)
  i874.separateAxes = !!i875[4]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i876 = root || new pc.ParticleSystemShape()
  var i877 = data
  i876.enabled = !!i877[0]
  i876.shapeType = i877[1]
  i876.randomDirectionAmount = i877[2]
  i876.sphericalDirectionAmount = i877[3]
  i876.randomPositionAmount = i877[4]
  i876.alignToDirection = !!i877[5]
  i876.radius = i877[6]
  i876.radiusMode = i877[7]
  i876.radiusSpread = i877[8]
  i876.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[9], i876.radiusSpeed)
  i876.radiusThickness = i877[10]
  i876.angle = i877[11]
  i876.length = i877[12]
  i876.boxThickness = new pc.Vec3( i877[13], i877[14], i877[15] )
  i876.meshShapeType = i877[16]
  request.r(i877[17], i877[18], 0, i876, 'mesh')
  request.r(i877[19], i877[20], 0, i876, 'meshRenderer')
  request.r(i877[21], i877[22], 0, i876, 'skinnedMeshRenderer')
  i876.useMeshMaterialIndex = !!i877[23]
  i876.meshMaterialIndex = i877[24]
  i876.useMeshColors = !!i877[25]
  i876.normalOffset = i877[26]
  i876.arc = i877[27]
  i876.arcMode = i877[28]
  i876.arcSpread = i877[29]
  i876.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[30], i876.arcSpeed)
  i876.donutRadius = i877[31]
  i876.position = new pc.Vec3( i877[32], i877[33], i877[34] )
  i876.rotation = new pc.Vec3( i877[35], i877[36], i877[37] )
  i876.scale = new pc.Vec3( i877[38], i877[39], i877[40] )
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i878 = root || new pc.ParticleSystemSizeBySpeed()
  var i879 = data
  i878.enabled = !!i879[0]
  i878.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[1], i878.x)
  i878.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[2], i878.y)
  i878.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i879[3], i878.z)
  i878.separateAxes = !!i879[4]
  i878.range = new pc.Vec2( i879[5], i879[6] )
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i880 = root || new pc.ParticleSystemSizeOverLifetime()
  var i881 = data
  i880.enabled = !!i881[0]
  i880.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[1], i880.x)
  i880.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[2], i880.y)
  i880.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[3], i880.z)
  i880.separateAxes = !!i881[4]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i882 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i883 = data
  i882.enabled = !!i883[0]
  i882.mode = i883[1]
  i882.animation = i883[2]
  i882.numTilesX = i883[3]
  i882.numTilesY = i883[4]
  i882.useRandomRow = !!i883[5]
  i882.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[6], i882.frameOverTime)
  i882.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[7], i882.startFrame)
  i882.cycleCount = i883[8]
  i882.rowIndex = i883[9]
  i882.flipU = i883[10]
  i882.flipV = i883[11]
  i882.spriteCount = i883[12]
  var i885 = i883[13]
  var i884 = []
  for(var i = 0; i < i885.length; i += 2) {
  request.r(i885[i + 0], i885[i + 1], 2, i884, '')
  }
  i882.sprites = i884
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i888 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i889 = data
  i888.enabled = !!i889[0]
  i888.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[1], i888.x)
  i888.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[2], i888.y)
  i888.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[3], i888.z)
  i888.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[4], i888.radial)
  i888.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[5], i888.speedModifier)
  i888.space = i889[6]
  i888.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[7], i888.orbitalX)
  i888.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[8], i888.orbitalY)
  i888.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[9], i888.orbitalZ)
  i888.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[10], i888.orbitalOffsetX)
  i888.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[11], i888.orbitalOffsetY)
  i888.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[12], i888.orbitalOffsetZ)
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i890 = root || new pc.ParticleSystemNoise()
  var i891 = data
  i890.enabled = !!i891[0]
  i890.separateAxes = !!i891[1]
  i890.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[2], i890.strengthX)
  i890.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[3], i890.strengthY)
  i890.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[4], i890.strengthZ)
  i890.frequency = i891[5]
  i890.damping = !!i891[6]
  i890.octaveCount = i891[7]
  i890.octaveMultiplier = i891[8]
  i890.octaveScale = i891[9]
  i890.quality = i891[10]
  i890.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[11], i890.scrollSpeed)
  i890.scrollSpeedMultiplier = i891[12]
  i890.remapEnabled = !!i891[13]
  i890.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[14], i890.remapX)
  i890.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[15], i890.remapY)
  i890.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[16], i890.remapZ)
  i890.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[17], i890.positionAmount)
  i890.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[18], i890.rotationAmount)
  i890.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[19], i890.sizeAmount)
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i892 = root || new pc.ParticleSystemInheritVelocity()
  var i893 = data
  i892.enabled = !!i893[0]
  i892.mode = i893[1]
  i892.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[2], i892.curve)
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i894 = root || new pc.ParticleSystemForceOverLifetime()
  var i895 = data
  i894.enabled = !!i895[0]
  i894.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[1], i894.x)
  i894.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[2], i894.y)
  i894.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i895[3], i894.z)
  i894.space = i895[4]
  i894.randomized = !!i895[5]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i896 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i897 = data
  i896.enabled = !!i897[0]
  i896.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[1], i896.limit)
  i896.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[2], i896.limitX)
  i896.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[3], i896.limitY)
  i896.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[4], i896.limitZ)
  i896.dampen = i897[5]
  i896.separateAxes = !!i897[6]
  i896.space = i897[7]
  i896.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i897[8], i896.drag)
  i896.multiplyDragByParticleSize = !!i897[9]
  i896.multiplyDragByParticleVelocity = !!i897[10]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i899 = data
  i898.enabled = !!i899[0]
  request.r(i899[1], i899[2], 0, i898, 'sharedMaterial')
  var i901 = i899[3]
  var i900 = []
  for(var i = 0; i < i901.length; i += 2) {
  request.r(i901[i + 0], i901[i + 1], 2, i900, '')
  }
  i898.sharedMaterials = i900
  i898.receiveShadows = !!i899[4]
  i898.shadowCastingMode = i899[5]
  i898.sortingLayerID = i899[6]
  i898.sortingOrder = i899[7]
  i898.lightmapIndex = i899[8]
  i898.lightmapSceneIndex = i899[9]
  i898.lightmapScaleOffset = new pc.Vec4( i899[10], i899[11], i899[12], i899[13] )
  i898.lightProbeUsage = i899[14]
  i898.reflectionProbeUsage = i899[15]
  request.r(i899[16], i899[17], 0, i898, 'mesh')
  i898.meshCount = i899[18]
  i898.activeVertexStreamsCount = i899[19]
  i898.alignment = i899[20]
  i898.renderMode = i899[21]
  i898.sortMode = i899[22]
  i898.lengthScale = i899[23]
  i898.velocityScale = i899[24]
  i898.cameraVelocityScale = i899[25]
  i898.normalDirection = i899[26]
  i898.sortingFudge = i899[27]
  i898.minParticleSize = i899[28]
  i898.maxParticleSize = i899[29]
  i898.pivot = new pc.Vec3( i899[30], i899[31], i899[32] )
  request.r(i899[33], i899[34], 0, i898, 'trailMaterial')
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i905 = data
  i904.name = i905[0]
  i904.halfPrecision = !!i905[1]
  i904.useUInt32IndexFormat = !!i905[2]
  i904.vertexCount = i905[3]
  i904.aabb = i905[4]
  var i907 = i905[5]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( !!i907[i + 0] );
  }
  i904.streams = i906
  i904.vertices = i905[6]
  var i909 = i905[7]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i909[i + 0]) );
  }
  i904.subMeshes = i908
  var i911 = i905[8]
  var i910 = []
  for(var i = 0; i < i911.length; i += 16) {
    i910.push( new pc.Mat4().setData(i911[i + 0], i911[i + 1], i911[i + 2], i911[i + 3],  i911[i + 4], i911[i + 5], i911[i + 6], i911[i + 7],  i911[i + 8], i911[i + 9], i911[i + 10], i911[i + 11],  i911[i + 12], i911[i + 13], i911[i + 14], i911[i + 15]) );
  }
  i904.bindposes = i910
  var i913 = i905[9]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i913[i + 0]) );
  }
  i904.blendShapes = i912
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i919 = data
  i918.triangles = i919[0]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i925 = data
  i924.name = i925[0]
  var i927 = i925[1]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i927[i + 0]) );
  }
  i924.frames = i926
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i929 = data
  i928.name = i929[0]
  i928.index = i929[1]
  i928.startup = !!i929[2]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i931 = data
  i930.enabled = !!i931[0]
  i930.aspect = i931[1]
  i930.orthographic = !!i931[2]
  i930.orthographicSize = i931[3]
  i930.backgroundColor = new pc.Color(i931[4], i931[5], i931[6], i931[7])
  i930.nearClipPlane = i931[8]
  i930.farClipPlane = i931[9]
  i930.fieldOfView = i931[10]
  i930.depth = i931[11]
  i930.clearFlags = i931[12]
  i930.cullingMask = i931[13]
  i930.rect = i931[14]
  request.r(i931[15], i931[16], 0, i930, 'targetTexture')
  i930.usePhysicalProperties = !!i931[17]
  i930.focalLength = i931[18]
  i930.sensorSize = new pc.Vec2( i931[19], i931[20] )
  i930.lensShift = new pc.Vec2( i931[21], i931[22] )
  i930.gateFit = i931[23]
  i930.commandBufferCount = i931[24]
  i930.cameraType = i931[25]
  return i930
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i932 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i933 = data
  i932.m_RenderShadows = !!i933[0]
  i932.m_RequiresDepthTextureOption = i933[1]
  i932.m_RequiresOpaqueTextureOption = i933[2]
  i932.m_CameraType = i933[3]
  var i935 = i933[4]
  var i934 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i935.length; i += 2) {
  request.r(i935[i + 0], i935[i + 1], 1, i934, '')
  }
  i932.m_Cameras = i934
  i932.m_RendererIndex = i933[5]
  i932.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i933[6] )
  request.r(i933[7], i933[8], 0, i932, 'm_VolumeTrigger')
  i932.m_VolumeFrameworkUpdateModeOption = i933[9]
  i932.m_RenderPostProcessing = !!i933[10]
  i932.m_Antialiasing = i933[11]
  i932.m_AntialiasingQuality = i933[12]
  i932.m_StopNaN = !!i933[13]
  i932.m_Dithering = !!i933[14]
  i932.m_ClearDepth = !!i933[15]
  i932.m_AllowXRRendering = !!i933[16]
  i932.m_RequiresDepthTexture = !!i933[17]
  i932.m_RequiresColorTexture = !!i933[18]
  i932.m_Version = i933[19]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i939 = data
  i938.pivot = new pc.Vec2( i939[0], i939[1] )
  i938.anchorMin = new pc.Vec2( i939[2], i939[3] )
  i938.anchorMax = new pc.Vec2( i939[4], i939[5] )
  i938.sizeDelta = new pc.Vec2( i939[6], i939[7] )
  i938.anchoredPosition3D = new pc.Vec3( i939[8], i939[9], i939[10] )
  i938.rotation = new pc.Quat(i939[11], i939[12], i939[13], i939[14])
  i938.scale = new pc.Vec3( i939[15], i939[16], i939[17] )
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i941 = data
  i940.enabled = !!i941[0]
  i940.planeDistance = i941[1]
  i940.referencePixelsPerUnit = i941[2]
  i940.isFallbackOverlay = !!i941[3]
  i940.renderMode = i941[4]
  i940.renderOrder = i941[5]
  i940.sortingLayerName = i941[6]
  i940.sortingOrder = i941[7]
  i940.scaleFactor = i941[8]
  request.r(i941[9], i941[10], 0, i940, 'worldCamera')
  i940.overrideSorting = !!i941[11]
  i940.pixelPerfect = !!i941[12]
  i940.targetDisplay = i941[13]
  i940.overridePixelPerfect = !!i941[14]
  return i940
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i942 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i943 = data
  i942.m_UiScaleMode = i943[0]
  i942.m_ReferencePixelsPerUnit = i943[1]
  i942.m_ScaleFactor = i943[2]
  i942.m_ReferenceResolution = new pc.Vec2( i943[3], i943[4] )
  i942.m_ScreenMatchMode = i943[5]
  i942.m_MatchWidthOrHeight = i943[6]
  i942.m_PhysicalUnit = i943[7]
  i942.m_FallbackScreenDPI = i943[8]
  i942.m_DefaultSpriteDPI = i943[9]
  i942.m_DynamicPixelsPerUnit = i943[10]
  i942.m_PresetInfoIsWorld = !!i943[11]
  return i942
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i944 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i945 = data
  i944.m_IgnoreReversedGraphics = !!i945[0]
  i944.m_BlockingObjects = i945[1]
  i944.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i945[2] )
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i947 = data
  i946.cullTransparentMesh = !!i947[0]
  return i946
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i948 = root || request.c( 'UnityEngine.UI.Image' )
  var i949 = data
  request.r(i949[0], i949[1], 0, i948, 'm_Sprite')
  i948.m_Type = i949[2]
  i948.m_PreserveAspect = !!i949[3]
  i948.m_FillCenter = !!i949[4]
  i948.m_FillMethod = i949[5]
  i948.m_FillAmount = i949[6]
  i948.m_FillClockwise = !!i949[7]
  i948.m_FillOrigin = i949[8]
  i948.m_UseSpriteMesh = !!i949[9]
  i948.m_PixelsPerUnitMultiplier = i949[10]
  request.r(i949[11], i949[12], 0, i948, 'm_Material')
  i948.m_Maskable = !!i949[13]
  i948.m_Color = new pc.Color(i949[14], i949[15], i949[16], i949[17])
  i948.m_RaycastTarget = !!i949[18]
  i948.m_RaycastPadding = new pc.Vec4( i949[19], i949[20], i949[21], i949[22] )
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i951 = data
  request.r(i951[0], i951[1], 0, i950, 'animatorController')
  request.r(i951[2], i951[3], 0, i950, 'avatar')
  i950.updateMode = i951[4]
  i950.hasTransformHierarchy = !!i951[5]
  i950.applyRootMotion = !!i951[6]
  var i953 = i951[7]
  var i952 = []
  for(var i = 0; i < i953.length; i += 2) {
  request.r(i953[i + 0], i953[i + 1], 2, i952, '')
  }
  i950.humanBones = i952
  i950.enabled = !!i951[8]
  return i950
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i956 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i957 = data
  i956.m_hasFontAssetChanged = !!i957[0]
  request.r(i957[1], i957[2], 0, i956, 'm_baseMaterial')
  i956.m_maskOffset = new pc.Vec4( i957[3], i957[4], i957[5], i957[6] )
  i956.m_text = i957[7]
  i956.m_isRightToLeft = !!i957[8]
  request.r(i957[9], i957[10], 0, i956, 'm_fontAsset')
  request.r(i957[11], i957[12], 0, i956, 'm_sharedMaterial')
  var i959 = i957[13]
  var i958 = []
  for(var i = 0; i < i959.length; i += 2) {
  request.r(i959[i + 0], i959[i + 1], 2, i958, '')
  }
  i956.m_fontSharedMaterials = i958
  request.r(i957[14], i957[15], 0, i956, 'm_fontMaterial')
  var i961 = i957[16]
  var i960 = []
  for(var i = 0; i < i961.length; i += 2) {
  request.r(i961[i + 0], i961[i + 1], 2, i960, '')
  }
  i956.m_fontMaterials = i960
  i956.m_fontColor32 = UnityEngine.Color32.ConstructColor(i957[17], i957[18], i957[19], i957[20])
  i956.m_fontColor = new pc.Color(i957[21], i957[22], i957[23], i957[24])
  i956.m_enableVertexGradient = !!i957[25]
  i956.m_colorMode = i957[26]
  i956.m_fontColorGradient = request.d('TMPro.VertexGradient', i957[27], i956.m_fontColorGradient)
  request.r(i957[28], i957[29], 0, i956, 'm_fontColorGradientPreset')
  request.r(i957[30], i957[31], 0, i956, 'm_spriteAsset')
  i956.m_tintAllSprites = !!i957[32]
  request.r(i957[33], i957[34], 0, i956, 'm_StyleSheet')
  i956.m_TextStyleHashCode = i957[35]
  i956.m_overrideHtmlColors = !!i957[36]
  i956.m_faceColor = UnityEngine.Color32.ConstructColor(i957[37], i957[38], i957[39], i957[40])
  i956.m_fontSize = i957[41]
  i956.m_fontSizeBase = i957[42]
  i956.m_fontWeight = i957[43]
  i956.m_enableAutoSizing = !!i957[44]
  i956.m_fontSizeMin = i957[45]
  i956.m_fontSizeMax = i957[46]
  i956.m_fontStyle = i957[47]
  i956.m_HorizontalAlignment = i957[48]
  i956.m_VerticalAlignment = i957[49]
  i956.m_textAlignment = i957[50]
  i956.m_characterSpacing = i957[51]
  i956.m_wordSpacing = i957[52]
  i956.m_lineSpacing = i957[53]
  i956.m_lineSpacingMax = i957[54]
  i956.m_paragraphSpacing = i957[55]
  i956.m_charWidthMaxAdj = i957[56]
  i956.m_enableWordWrapping = !!i957[57]
  i956.m_wordWrappingRatios = i957[58]
  i956.m_overflowMode = i957[59]
  request.r(i957[60], i957[61], 0, i956, 'm_linkedTextComponent')
  request.r(i957[62], i957[63], 0, i956, 'parentLinkedComponent')
  i956.m_enableKerning = !!i957[64]
  i956.m_enableExtraPadding = !!i957[65]
  i956.checkPaddingRequired = !!i957[66]
  i956.m_isRichText = !!i957[67]
  i956.m_parseCtrlCharacters = !!i957[68]
  i956.m_isOrthographic = !!i957[69]
  i956.m_isCullingEnabled = !!i957[70]
  i956.m_horizontalMapping = i957[71]
  i956.m_verticalMapping = i957[72]
  i956.m_uvLineOffset = i957[73]
  i956.m_geometrySortingOrder = i957[74]
  i956.m_IsTextObjectScaleStatic = !!i957[75]
  i956.m_VertexBufferAutoSizeReduction = !!i957[76]
  i956.m_useMaxVisibleDescender = !!i957[77]
  i956.m_pageToDisplay = i957[78]
  i956.m_margin = new pc.Vec4( i957[79], i957[80], i957[81], i957[82] )
  i956.m_isUsingLegacyAnimationComponent = !!i957[83]
  i956.m_isVolumetricText = !!i957[84]
  request.r(i957[85], i957[86], 0, i956, 'm_Material')
  i956.m_Maskable = !!i957[87]
  i956.m_Color = new pc.Color(i957[88], i957[89], i957[90], i957[91])
  i956.m_RaycastTarget = !!i957[92]
  i956.m_RaycastPadding = new pc.Vec4( i957[93], i957[94], i957[95], i957[96] )
  return i956
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i962 = root || request.c( 'TMPro.VertexGradient' )
  var i963 = data
  i962.topLeft = new pc.Color(i963[0], i963[1], i963[2], i963[3])
  i962.topRight = new pc.Color(i963[4], i963[5], i963[6], i963[7])
  i962.bottomLeft = new pc.Color(i963[8], i963[9], i963[10], i963[11])
  i962.bottomRight = new pc.Color(i963[12], i963[13], i963[14], i963[15])
  return i962
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i964 = root || request.c( 'UnityEngine.UI.Button' )
  var i965 = data
  i964.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i965[0], i964.m_OnClick)
  i964.m_Navigation = request.d('UnityEngine.UI.Navigation', i965[1], i964.m_Navigation)
  i964.m_Transition = i965[2]
  i964.m_Colors = request.d('UnityEngine.UI.ColorBlock', i965[3], i964.m_Colors)
  i964.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i965[4], i964.m_SpriteState)
  i964.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i965[5], i964.m_AnimationTriggers)
  i964.m_Interactable = !!i965[6]
  request.r(i965[7], i965[8], 0, i964, 'm_TargetGraphic')
  return i964
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i966 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i967 = data
  i966.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i967[0], i966.m_PersistentCalls)
  return i966
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i968 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i969 = data
  var i971 = i969[0]
  var i970 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i971.length; i += 1) {
    i970.add(request.d('UnityEngine.Events.PersistentCall', i971[i + 0]));
  }
  i968.m_Calls = i970
  return i968
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i974 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i975 = data
  request.r(i975[0], i975[1], 0, i974, 'm_Target')
  i974.m_TargetAssemblyTypeName = i975[2]
  i974.m_MethodName = i975[3]
  i974.m_Mode = i975[4]
  i974.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i975[5], i974.m_Arguments)
  i974.m_CallState = i975[6]
  return i974
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i976 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i977 = data
  i976.m_Mode = i977[0]
  i976.m_WrapAround = !!i977[1]
  request.r(i977[2], i977[3], 0, i976, 'm_SelectOnUp')
  request.r(i977[4], i977[5], 0, i976, 'm_SelectOnDown')
  request.r(i977[6], i977[7], 0, i976, 'm_SelectOnLeft')
  request.r(i977[8], i977[9], 0, i976, 'm_SelectOnRight')
  return i976
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i978 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i979 = data
  i978.m_NormalColor = new pc.Color(i979[0], i979[1], i979[2], i979[3])
  i978.m_HighlightedColor = new pc.Color(i979[4], i979[5], i979[6], i979[7])
  i978.m_PressedColor = new pc.Color(i979[8], i979[9], i979[10], i979[11])
  i978.m_SelectedColor = new pc.Color(i979[12], i979[13], i979[14], i979[15])
  i978.m_DisabledColor = new pc.Color(i979[16], i979[17], i979[18], i979[19])
  i978.m_ColorMultiplier = i979[20]
  i978.m_FadeDuration = i979[21]
  return i978
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i980 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i981 = data
  request.r(i981[0], i981[1], 0, i980, 'm_HighlightedSprite')
  request.r(i981[2], i981[3], 0, i980, 'm_PressedSprite')
  request.r(i981[4], i981[5], 0, i980, 'm_SelectedSprite')
  request.r(i981[6], i981[7], 0, i980, 'm_DisabledSprite')
  return i980
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i982 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i983 = data
  i982.m_NormalTrigger = i983[0]
  i982.m_HighlightedTrigger = i983[1]
  i982.m_PressedTrigger = i983[2]
  i982.m_SelectedTrigger = i983[3]
  i982.m_DisabledTrigger = i983[4]
  return i982
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i984 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i985 = data
  request.r(i985[0], i985[1], 0, i984, 'skeletonDataAsset')
  request.r(i985[2], i985[3], 0, i984, 'additiveMaterial')
  request.r(i985[4], i985[5], 0, i984, 'multiplyMaterial')
  request.r(i985[6], i985[7], 0, i984, 'screenMaterial')
  i984.initialSkinName = i985[8]
  i984.initialFlipX = !!i985[9]
  i984.initialFlipY = !!i985[10]
  i984.startingAnimation = i985[11]
  i984.startingLoop = !!i985[12]
  i984.timeScale = i985[13]
  i984.freeze = !!i985[14]
  i984.updateWhenInvisible = i985[15]
  i984.unscaledTime = !!i985[16]
  i984.allowMultipleCanvasRenderers = !!i985[17]
  var i987 = i985[18]
  var i986 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i987.length; i += 2) {
  request.r(i987[i + 0], i987[i + 1], 1, i986, '')
  }
  i984.canvasRenderers = i986
  i984.enableSeparatorSlots = !!i985[19]
  i984.updateSeparatorPartLocation = !!i985[20]
  var i989 = i985[21]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( i989[i + 0] );
  }
  i984.separatorSlotNames = i988
  var i991 = i985[22]
  var i990 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i991.length; i += 2) {
  request.r(i991[i + 0], i991[i + 1], 1, i990, '')
  }
  i984.separatorParts = i990
  i984.meshGenerator = request.d('Spine.Unity.MeshGenerator', i985[23], i984.meshGenerator)
  request.r(i985[24], i985[25], 0, i984, 'm_Material')
  i984.m_Maskable = !!i985[26]
  i984.m_Color = new pc.Color(i985[27], i985[28], i985[29], i985[30])
  i984.m_RaycastTarget = !!i985[31]
  i984.m_RaycastPadding = new pc.Vec4( i985[32], i985[33], i985[34], i985[35] )
  return i984
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i998 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i999 = data
  i998.settings = request.d('Spine.Unity.MeshGenerator+Settings', i999[0], i998.settings)
  return i998
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i1000 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i1001 = data
  i1000.useClipping = !!i1001[0]
  i1000.zSpacing = i1001[1]
  i1000.pmaVertexColors = !!i1001[2]
  i1000.tintBlack = !!i1001[3]
  i1000.canvasGroupTintBlack = !!i1001[4]
  i1000.calculateTangents = !!i1001[5]
  i1000.addNormals = !!i1001[6]
  i1000.immutableTriangles = !!i1001[7]
  return i1000
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1002 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1003 = data
  request.r(i1003[0], i1003[1], 0, i1002, 'm_ObjectArgument')
  i1002.m_ObjectArgumentAssemblyTypeName = i1003[2]
  i1002.m_IntArgument = i1003[3]
  i1002.m_FloatArgument = i1003[4]
  i1002.m_StringArgument = i1003[5]
  i1002.m_BoolArgument = !!i1003[6]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1005 = data
  i1004.enabled = !!i1005[0]
  i1004.type = i1005[1]
  i1004.color = new pc.Color(i1005[2], i1005[3], i1005[4], i1005[5])
  i1004.cullingMask = i1005[6]
  i1004.intensity = i1005[7]
  i1004.range = i1005[8]
  i1004.spotAngle = i1005[9]
  i1004.shadows = i1005[10]
  i1004.shadowNormalBias = i1005[11]
  i1004.shadowBias = i1005[12]
  i1004.shadowStrength = i1005[13]
  i1004.shadowResolution = i1005[14]
  i1004.lightmapBakeType = i1005[15]
  i1004.renderMode = i1005[16]
  request.r(i1005[17], i1005[18], 0, i1004, 'cookie')
  i1004.cookieSize = i1005[19]
  return i1004
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i1006 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i1007 = data
  i1006.m_Version = i1007[0]
  i1006.m_UsePipelineSettings = !!i1007[1]
  i1006.m_AdditionalLightsShadowResolutionTier = i1007[2]
  i1006.m_LightLayerMask = i1007[3]
  i1006.m_CustomShadowLayers = !!i1007[4]
  i1006.m_ShadowLayerMask = i1007[5]
  i1006.m_LightCookieSize = new pc.Vec2( i1007[6], i1007[7] )
  i1006.m_LightCookieOffset = new pc.Vec2( i1007[8], i1007[9] )
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1009 = data
  i1008.enabled = !!i1009[0]
  request.r(i1009[1], i1009[2], 0, i1008, 'sharedMaterial')
  var i1011 = i1009[3]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 2) {
  request.r(i1011[i + 0], i1011[i + 1], 2, i1010, '')
  }
  i1008.sharedMaterials = i1010
  i1008.receiveShadows = !!i1009[4]
  i1008.shadowCastingMode = i1009[5]
  i1008.sortingLayerID = i1009[6]
  i1008.sortingOrder = i1009[7]
  i1008.lightmapIndex = i1009[8]
  i1008.lightmapSceneIndex = i1009[9]
  i1008.lightmapScaleOffset = new pc.Vec4( i1009[10], i1009[11], i1009[12], i1009[13] )
  i1008.lightProbeUsage = i1009[14]
  i1008.reflectionProbeUsage = i1009[15]
  i1008.color = new pc.Color(i1009[16], i1009[17], i1009[18], i1009[19])
  request.r(i1009[20], i1009[21], 0, i1008, 'sprite')
  i1008.flipX = !!i1009[22]
  i1008.flipY = !!i1009[23]
  i1008.drawMode = i1009[24]
  i1008.size = new pc.Vec2( i1009[25], i1009[26] )
  i1008.tileMode = i1009[27]
  i1008.adaptiveModeThreshold = i1009[28]
  i1008.maskInteraction = i1009[29]
  i1008.spriteSortPoint = i1009[30]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1013 = data
  request.r(i1013[0], i1013[1], 0, i1012, 'sharedMesh')
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1015 = data
  request.r(i1015[0], i1015[1], 0, i1014, 'additionalVertexStreams')
  i1014.enabled = !!i1015[2]
  request.r(i1015[3], i1015[4], 0, i1014, 'sharedMaterial')
  var i1017 = i1015[5]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 2) {
  request.r(i1017[i + 0], i1017[i + 1], 2, i1016, '')
  }
  i1014.sharedMaterials = i1016
  i1014.receiveShadows = !!i1015[6]
  i1014.shadowCastingMode = i1015[7]
  i1014.sortingLayerID = i1015[8]
  i1014.sortingOrder = i1015[9]
  i1014.lightmapIndex = i1015[10]
  i1014.lightmapSceneIndex = i1015[11]
  i1014.lightmapScaleOffset = new pc.Vec4( i1015[12], i1015[13], i1015[14], i1015[15] )
  i1014.lightProbeUsage = i1015[16]
  i1014.reflectionProbeUsage = i1015[17]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1019 = data
  i1018.center = new pc.Vec3( i1019[0], i1019[1], i1019[2] )
  i1018.size = new pc.Vec3( i1019[3], i1019[4], i1019[5] )
  i1018.enabled = !!i1019[6]
  i1018.isTrigger = !!i1019[7]
  request.r(i1019[8], i1019[9], 0, i1018, 'material')
  return i1018
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1020 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1021 = data
  i1020.m_ShowMaskGraphic = !!i1021[0]
  return i1020
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1022 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1023 = data
  request.r(i1023[0], i1023[1], 0, i1022, 'm_FirstSelected')
  i1022.m_sendNavigationEvents = !!i1023[2]
  i1022.m_DragThreshold = i1023[3]
  return i1022
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1024 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1025 = data
  i1024.m_HorizontalAxis = i1025[0]
  i1024.m_VerticalAxis = i1025[1]
  i1024.m_SubmitButton = i1025[2]
  i1024.m_CancelButton = i1025[3]
  i1024.m_InputActionsPerSecond = i1025[4]
  i1024.m_RepeatDelay = i1025[5]
  i1024.m_ForceModuleActive = !!i1025[6]
  i1024.m_SendPointerHoverToParent = !!i1025[7]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1027 = data
  i1026.ambientIntensity = i1027[0]
  i1026.reflectionIntensity = i1027[1]
  i1026.ambientMode = i1027[2]
  i1026.ambientLight = new pc.Color(i1027[3], i1027[4], i1027[5], i1027[6])
  i1026.ambientSkyColor = new pc.Color(i1027[7], i1027[8], i1027[9], i1027[10])
  i1026.ambientGroundColor = new pc.Color(i1027[11], i1027[12], i1027[13], i1027[14])
  i1026.ambientEquatorColor = new pc.Color(i1027[15], i1027[16], i1027[17], i1027[18])
  i1026.fogColor = new pc.Color(i1027[19], i1027[20], i1027[21], i1027[22])
  i1026.fogEndDistance = i1027[23]
  i1026.fogStartDistance = i1027[24]
  i1026.fogDensity = i1027[25]
  i1026.fog = !!i1027[26]
  request.r(i1027[27], i1027[28], 0, i1026, 'skybox')
  i1026.fogMode = i1027[29]
  var i1029 = i1027[30]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1029[i + 0]) );
  }
  i1026.lightmaps = i1028
  i1026.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1027[31], i1026.lightProbes)
  i1026.lightmapsMode = i1027[32]
  i1026.mixedBakeMode = i1027[33]
  i1026.environmentLightingMode = i1027[34]
  i1026.ambientProbe = new pc.SphericalHarmonicsL2(i1027[35])
  i1026.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1027[36])
  i1026.useReferenceAmbientProbe = !!i1027[37]
  request.r(i1027[38], i1027[39], 0, i1026, 'customReflection')
  request.r(i1027[40], i1027[41], 0, i1026, 'defaultReflection')
  i1026.defaultReflectionMode = i1027[42]
  i1026.defaultReflectionResolution = i1027[43]
  i1026.sunLightObjectId = i1027[44]
  i1026.pixelLightCount = i1027[45]
  i1026.defaultReflectionHDR = !!i1027[46]
  i1026.hasLightDataAsset = !!i1027[47]
  i1026.hasManualGenerate = !!i1027[48]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1033 = data
  request.r(i1033[0], i1033[1], 0, i1032, 'lightmapColor')
  request.r(i1033[2], i1033[3], 0, i1032, 'lightmapDirection')
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1034 = root || new UnityEngine.LightProbes()
  var i1035 = data
  return i1034
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i1042 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i1043 = data
  request.r(i1043[0], i1043[1], 0, i1042, 'panelPrefab')
  var i1045 = i1043[2]
  var i1044 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i1045[i + 0]));
  }
  i1042.prefabs = i1044
  return i1042
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i1048 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i1049 = data
  i1048.type = i1049[0]
  request.r(i1049[1], i1049[2], 0, i1048, 'prefab')
  return i1048
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i1050 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i1051 = data
  i1050.m_Spacing = i1051[0]
  i1050.m_ChildForceExpandWidth = !!i1051[1]
  i1050.m_ChildForceExpandHeight = !!i1051[2]
  i1050.m_ChildControlWidth = !!i1051[3]
  i1050.m_ChildControlHeight = !!i1051[4]
  i1050.m_ChildScaleWidth = !!i1051[5]
  i1050.m_ChildScaleHeight = !!i1051[6]
  i1050.m_ReverseArrangement = !!i1051[7]
  i1050.m_Padding = UnityEngine.RectOffset.FromPaddings(i1051[8], i1051[9], i1051[10], i1051[11])
  i1050.m_ChildAlignment = i1051[12]
  return i1050
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i1052 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i1053 = data
  i1052.m_HorizontalFit = i1053[0]
  i1052.m_VerticalFit = i1053[1]
  return i1052
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i1054 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i1055 = data
  request.r(i1055[0], i1055[1], 0, i1054, 'contentHolder')
  return i1054
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i1056 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i1057 = data
  request.r(i1057[0], i1057[1], 0, i1056, 'nameLabel')
  request.r(i1057[2], i1057[3], 0, i1056, 'scrollRect')
  request.r(i1057[4], i1057[5], 0, i1056, 'viewport')
  request.r(i1057[6], i1057[7], 0, i1056, 'Canvas')
  return i1056
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i1058 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i1059 = data
  i1058.m_IgnoreLayout = !!i1059[0]
  i1058.m_MinWidth = i1059[1]
  i1058.m_MinHeight = i1059[2]
  i1058.m_PreferredWidth = i1059[3]
  i1058.m_PreferredHeight = i1059[4]
  i1058.m_FlexibleWidth = i1059[5]
  i1058.m_FlexibleHeight = i1059[6]
  i1058.m_LayoutPriority = i1059[7]
  return i1058
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1060 = root || request.c( 'UnityEngine.UI.Text' )
  var i1061 = data
  i1060.m_FontData = request.d('UnityEngine.UI.FontData', i1061[0], i1060.m_FontData)
  i1060.m_Text = i1061[1]
  request.r(i1061[2], i1061[3], 0, i1060, 'm_Material')
  i1060.m_Maskable = !!i1061[4]
  i1060.m_Color = new pc.Color(i1061[5], i1061[6], i1061[7], i1061[8])
  i1060.m_RaycastTarget = !!i1061[9]
  i1060.m_RaycastPadding = new pc.Vec4( i1061[10], i1061[11], i1061[12], i1061[13] )
  return i1060
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1062 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1063 = data
  request.r(i1063[0], i1063[1], 0, i1062, 'm_Font')
  i1062.m_FontSize = i1063[2]
  i1062.m_FontStyle = i1063[3]
  i1062.m_BestFit = !!i1063[4]
  i1062.m_MinSize = i1063[5]
  i1062.m_MaxSize = i1063[6]
  i1062.m_Alignment = i1063[7]
  i1062.m_AlignByGeometry = !!i1063[8]
  i1062.m_RichText = !!i1063[9]
  i1062.m_HorizontalOverflow = i1063[10]
  i1062.m_VerticalOverflow = i1063[11]
  i1062.m_LineSpacing = i1063[12]
  return i1062
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i1064 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i1065 = data
  request.r(i1065[0], i1065[1], 0, i1064, 'm_Content')
  i1064.m_Horizontal = !!i1065[2]
  i1064.m_Vertical = !!i1065[3]
  i1064.m_MovementType = i1065[4]
  i1064.m_Elasticity = i1065[5]
  i1064.m_Inertia = !!i1065[6]
  i1064.m_DecelerationRate = i1065[7]
  i1064.m_ScrollSensitivity = i1065[8]
  request.r(i1065[9], i1065[10], 0, i1064, 'm_Viewport')
  request.r(i1065[11], i1065[12], 0, i1064, 'm_HorizontalScrollbar')
  request.r(i1065[13], i1065[14], 0, i1064, 'm_VerticalScrollbar')
  i1064.m_HorizontalScrollbarVisibility = i1065[15]
  i1064.m_VerticalScrollbarVisibility = i1065[16]
  i1064.m_HorizontalScrollbarSpacing = i1065[17]
  i1064.m_VerticalScrollbarSpacing = i1065[18]
  i1064.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i1065[19], i1064.m_OnValueChanged)
  return i1064
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i1066 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i1067 = data
  i1066.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1067[0], i1066.m_PersistentCalls)
  return i1066
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i1068 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i1069 = data
  request.r(i1069[0], i1069[1], 0, i1068, 'm_HandleRect')
  i1068.m_Direction = i1069[2]
  i1068.m_Value = i1069[3]
  i1068.m_Size = i1069[4]
  i1068.m_NumberOfSteps = i1069[5]
  i1068.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i1069[6], i1068.m_OnValueChanged)
  i1068.m_Navigation = request.d('UnityEngine.UI.Navigation', i1069[7], i1068.m_Navigation)
  i1068.m_Transition = i1069[8]
  i1068.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1069[9], i1068.m_Colors)
  i1068.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1069[10], i1068.m_SpriteState)
  i1068.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1069[11], i1068.m_AnimationTriggers)
  i1068.m_Interactable = !!i1069[12]
  request.r(i1069[13], i1069[14], 0, i1068, 'm_TargetGraphic')
  return i1068
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i1070 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i1071 = data
  i1070.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1071[0], i1070.m_PersistentCalls)
  return i1070
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i1072 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i1073 = data
  var i1075 = i1073[0]
  var i1074 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i1075[i + 0]));
  }
  i1072.m_Delegates = i1074
  return i1072
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i1078 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i1079 = data
  i1078.eventID = i1079[0]
  i1078.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i1079[1], i1078.callback)
  return i1078
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i1080 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i1081 = data
  i1080.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1081[0], i1080.m_PersistentCalls)
  return i1080
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i1082 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i1083 = data
  request.r(i1083[0], i1083[1], 0, i1082, 'nameLabel')
  request.r(i1083[2], i1083[3], 0, i1082, 'valueLabel')
  i1082.colorDefault = new pc.Color(i1083[4], i1083[5], i1083[6], i1083[7])
  i1082.colorSelected = new pc.Color(i1083[8], i1083[9], i1083[10], i1083[11])
  return i1082
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i1084 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i1085 = data
  request.r(i1085[0], i1085[1], 0, i1084, 'nameLabel')
  request.r(i1085[2], i1085[3], 0, i1084, 'valueToggle')
  request.r(i1085[4], i1085[5], 0, i1084, 'checkmarkImage')
  i1084.colorDefault = new pc.Color(i1085[6], i1085[7], i1085[8], i1085[9])
  i1084.colorSelected = new pc.Color(i1085[10], i1085[11], i1085[12], i1085[13])
  return i1084
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i1086 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i1087 = data
  i1086.toggleTransition = i1087[0]
  request.r(i1087[1], i1087[2], 0, i1086, 'graphic')
  i1086.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i1087[3], i1086.onValueChanged)
  request.r(i1087[4], i1087[5], 0, i1086, 'm_Group')
  i1086.m_IsOn = !!i1087[6]
  i1086.m_Navigation = request.d('UnityEngine.UI.Navigation', i1087[7], i1086.m_Navigation)
  i1086.m_Transition = i1087[8]
  i1086.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1087[9], i1086.m_Colors)
  i1086.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1087[10], i1086.m_SpriteState)
  i1086.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1087[11], i1086.m_AnimationTriggers)
  i1086.m_Interactable = !!i1087[12]
  request.r(i1087[13], i1087[14], 0, i1086, 'm_TargetGraphic')
  return i1086
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i1088 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i1089 = data
  i1088.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1089[0], i1088.m_PersistentCalls)
  return i1088
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i1090 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i1091 = data
  request.r(i1091[0], i1091[1], 0, i1090, 'nameLabel')
  request.r(i1091[2], i1091[3], 0, i1090, 'valueLabel')
  i1090.colorDefault = new pc.Color(i1091[4], i1091[5], i1091[6], i1091[7])
  i1090.colorSelected = new pc.Color(i1091[8], i1091[9], i1091[10], i1091[11])
  return i1090
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i1092 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i1093 = data
  request.r(i1093[0], i1093[1], 0, i1092, 'nameLabel')
  request.r(i1093[2], i1093[3], 0, i1092, 'valueLabel')
  i1092.colorDefault = new pc.Color(i1093[4], i1093[5], i1093[6], i1093[7])
  i1092.colorSelected = new pc.Color(i1093[8], i1093[9], i1093[10], i1093[11])
  return i1092
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i1094 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i1095 = data
  request.r(i1095[0], i1095[1], 0, i1094, 'nameLabel')
  request.r(i1095[2], i1095[3], 0, i1094, 'valueLabel')
  i1094.colorDefault = new pc.Color(i1095[4], i1095[5], i1095[6], i1095[7])
  i1094.colorSelected = new pc.Color(i1095[8], i1095[9], i1095[10], i1095[11])
  return i1094
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i1096 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i1097 = data
  request.r(i1097[0], i1097[1], 0, i1096, 'nextButtonText')
  request.r(i1097[2], i1097[3], 0, i1096, 'previousButtonText')
  request.r(i1097[4], i1097[5], 0, i1096, 'nameLabel')
  request.r(i1097[6], i1097[7], 0, i1096, 'valueLabel')
  i1096.colorDefault = new pc.Color(i1097[8], i1097[9], i1097[10], i1097[11])
  i1096.colorSelected = new pc.Color(i1097[12], i1097[13], i1097[14], i1097[15])
  return i1096
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i1098 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i1099 = data
  request.r(i1099[0], i1099[1], 0, i1098, 'nameLabel')
  i1098.colorDefault = new pc.Color(i1099[2], i1099[3], i1099[4], i1099[5])
  i1098.colorSelected = new pc.Color(i1099[6], i1099[7], i1099[8], i1099[9])
  return i1098
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i1100 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i1101 = data
  request.r(i1101[0], i1101[1], 0, i1100, 'nameLabel')
  request.r(i1101[2], i1101[3], 0, i1100, 'valueToggle')
  i1100.colorDefault = new pc.Color(i1101[4], i1101[5], i1101[6], i1101[7])
  i1100.colorSelected = new pc.Color(i1101[8], i1101[9], i1101[10], i1101[11])
  return i1100
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i1102 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i1103 = data
  i1102.toggleTransition = i1103[0]
  request.r(i1103[1], i1103[2], 0, i1102, 'graphic')
  i1102.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i1103[3], i1102.onValueChanged)
  request.r(i1103[4], i1103[5], 0, i1102, 'content')
  request.r(i1103[6], i1103[7], 0, i1102, 'arrowOpened')
  request.r(i1103[8], i1103[9], 0, i1102, 'arrowClosed')
  request.r(i1103[10], i1103[11], 0, i1102, 'm_Group')
  i1102.m_IsOn = !!i1103[12]
  i1102.m_Navigation = request.d('UnityEngine.UI.Navigation', i1103[13], i1102.m_Navigation)
  i1102.m_Transition = i1103[14]
  i1102.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1103[15], i1102.m_Colors)
  i1102.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1103[16], i1102.m_SpriteState)
  i1102.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1103[17], i1102.m_AnimationTriggers)
  i1102.m_Interactable = !!i1103[18]
  request.r(i1103[19], i1103[20], 0, i1102, 'm_TargetGraphic')
  return i1102
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i1104 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i1105 = data
  request.r(i1105[0], i1105[1], 0, i1104, 'nameLabel')
  request.r(i1105[2], i1105[3], 0, i1104, 'valueToggle')
  request.r(i1105[4], i1105[5], 0, i1104, 'colorImage')
  request.r(i1105[6], i1105[7], 0, i1104, 'fieldR')
  request.r(i1105[8], i1105[9], 0, i1104, 'fieldG')
  request.r(i1105[10], i1105[11], 0, i1104, 'fieldB')
  request.r(i1105[12], i1105[13], 0, i1104, 'fieldA')
  i1104.colorDefault = new pc.Color(i1105[14], i1105[15], i1105[16], i1105[17])
  i1104.colorSelected = new pc.Color(i1105[18], i1105[19], i1105[20], i1105[21])
  return i1104
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i1106 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i1107 = data
  request.r(i1107[0], i1107[1], 0, i1106, 'nameLabel')
  request.r(i1107[2], i1107[3], 0, i1106, 'valueLabel')
  i1106.colorDefault = new pc.Color(i1107[4], i1107[5], i1107[6], i1107[7])
  i1106.colorSelected = new pc.Color(i1107[8], i1107[9], i1107[10], i1107[11])
  return i1106
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i1108 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i1109 = data
  request.r(i1109[0], i1109[1], 0, i1108, 'nameLabel')
  request.r(i1109[2], i1109[3], 0, i1108, 'valueToggle')
  request.r(i1109[4], i1109[5], 0, i1108, 'fieldX')
  request.r(i1109[6], i1109[7], 0, i1108, 'fieldY')
  i1108.colorDefault = new pc.Color(i1109[8], i1109[9], i1109[10], i1109[11])
  i1108.colorSelected = new pc.Color(i1109[12], i1109[13], i1109[14], i1109[15])
  return i1108
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i1110 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i1111 = data
  request.r(i1111[0], i1111[1], 0, i1110, 'nameLabel')
  request.r(i1111[2], i1111[3], 0, i1110, 'valueToggle')
  request.r(i1111[4], i1111[5], 0, i1110, 'fieldX')
  request.r(i1111[6], i1111[7], 0, i1110, 'fieldY')
  request.r(i1111[8], i1111[9], 0, i1110, 'fieldZ')
  i1110.colorDefault = new pc.Color(i1111[10], i1111[11], i1111[12], i1111[13])
  i1110.colorSelected = new pc.Color(i1111[14], i1111[15], i1111[16], i1111[17])
  return i1110
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i1112 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i1113 = data
  request.r(i1113[0], i1113[1], 0, i1112, 'nameLabel')
  request.r(i1113[2], i1113[3], 0, i1112, 'valueToggle')
  request.r(i1113[4], i1113[5], 0, i1112, 'fieldX')
  request.r(i1113[6], i1113[7], 0, i1112, 'fieldY')
  request.r(i1113[8], i1113[9], 0, i1112, 'fieldZ')
  request.r(i1113[10], i1113[11], 0, i1112, 'fieldW')
  i1112.colorDefault = new pc.Color(i1113[12], i1113[13], i1113[14], i1113[15])
  i1112.colorSelected = new pc.Color(i1113[16], i1113[17], i1113[18], i1113[19])
  return i1112
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i1114 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i1115 = data
  i1114.colorDefault = new pc.Color(i1115[0], i1115[1], i1115[2], i1115[3])
  i1114.colorSelected = new pc.Color(i1115[4], i1115[5], i1115[6], i1115[7])
  return i1114
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1116 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1117 = data
  i1116.m_Spacing = i1117[0]
  i1116.m_ChildForceExpandWidth = !!i1117[1]
  i1116.m_ChildForceExpandHeight = !!i1117[2]
  i1116.m_ChildControlWidth = !!i1117[3]
  i1116.m_ChildControlHeight = !!i1117[4]
  i1116.m_ChildScaleWidth = !!i1117[5]
  i1116.m_ChildScaleHeight = !!i1117[6]
  i1116.m_ReverseArrangement = !!i1117[7]
  i1116.m_Padding = UnityEngine.RectOffset.FromPaddings(i1117[8], i1117[9], i1117[10], i1117[11])
  i1116.m_ChildAlignment = i1117[12]
  return i1116
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i1118 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i1119 = data
  i1118.colorDefault = new pc.Color(i1119[0], i1119[1], i1119[2], i1119[3])
  i1118.colorSelected = new pc.Color(i1119[4], i1119[5], i1119[6], i1119[7])
  return i1118
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i1120 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i1121 = data
  request.r(i1121[0], i1121[1], 0, i1120, 'nameLabel')
  request.r(i1121[2], i1121[3], 0, i1120, 'header')
  i1120.colorDefault = new pc.Color(i1121[4], i1121[5], i1121[6], i1121[7])
  i1120.colorSelected = new pc.Color(i1121[8], i1121[9], i1121[10], i1121[11])
  return i1120
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i1122 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i1123 = data
  request.r(i1123[0], i1123[1], 0, i1122, 'nameLabel')
  request.r(i1123[2], i1123[3], 0, i1122, 'valueToggle')
  var i1125 = i1123[4]
  var i1124 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i1125.length; i += 2) {
  request.r(i1125[i + 0], i1125[i + 1], 1, i1124, '')
  }
  i1122.toggles = i1124
  i1122.colorDefault = new pc.Color(i1123[5], i1123[6], i1123[7], i1123[8])
  i1122.colorSelected = new pc.Color(i1123[9], i1123[10], i1123[11], i1123[12])
  return i1122
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i1128 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i1129 = data
  request.r(i1129[0], i1129[1], 0, i1128, 'nameLabel')
  request.r(i1129[2], i1129[3], 0, i1128, 'valueToggle')
  request.r(i1129[4], i1129[5], 0, i1128, 'checkmarkImage')
  i1128.colorDefault = new pc.Color(i1129[6], i1129[7], i1129[8], i1129[9])
  i1128.colorSelected = new pc.Color(i1129[10], i1129[11], i1129[12], i1129[13])
  return i1128
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i1130 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i1131 = data
  request.r(i1131[0], i1131[1], 0, i1130, 'nameLabel')
  request.r(i1131[2], i1131[3], 0, i1130, 'valueToggle')
  request.r(i1131[4], i1131[5], 0, i1130, 'checkmarkImage')
  i1130.colorDefault = new pc.Color(i1131[6], i1131[7], i1131[8], i1131[9])
  i1130.colorSelected = new pc.Color(i1131[10], i1131[11], i1131[12], i1131[13])
  return i1130
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i1132 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i1133 = data
  request.r(i1133[0], i1133[1], 0, i1132, 'nextButtonText')
  request.r(i1133[2], i1133[3], 0, i1132, 'previousButtonText')
  request.r(i1133[4], i1133[5], 0, i1132, 'nameLabel')
  request.r(i1133[6], i1133[7], 0, i1132, 'valueLabel')
  i1132.colorDefault = new pc.Color(i1133[8], i1133[9], i1133[10], i1133[11])
  i1132.colorSelected = new pc.Color(i1133[12], i1133[13], i1133[14], i1133[15])
  return i1132
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i1134 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i1135 = data
  request.r(i1135[0], i1135[1], 0, i1134, 'nameLabel')
  request.r(i1135[2], i1135[3], 0, i1134, 'valueToggle')
  i1134.colorDefault = new pc.Color(i1135[4], i1135[5], i1135[6], i1135[7])
  i1134.colorSelected = new pc.Color(i1135[8], i1135[9], i1135[10], i1135[11])
  return i1134
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i1136 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i1137 = data
  request.r(i1137[0], i1137[1], 0, i1136, 'nameLabel')
  i1136.colorDefault = new pc.Color(i1137[2], i1137[3], i1137[4], i1137[5])
  i1136.colorSelected = new pc.Color(i1137[6], i1137[7], i1137[8], i1137[9])
  return i1136
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i1138 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i1139 = data
  request.r(i1139[0], i1139[1], 0, i1138, 'panel')
  request.r(i1139[2], i1139[3], 0, i1138, 'valuePrefab')
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i1141 = data
  i1140.AdditionalLightsPerObjectLimit = i1141[0]
  i1140.AdditionalLightsRenderingMode = i1141[1]
  i1140.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1141[2], i1140.LightRenderingMode)
  i1140.ColorGradingLutSize = i1141[3]
  i1140.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i1141[4], i1140.ColorGradingMode)
  i1140.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1141[5], i1140.MainLightRenderingMode)
  i1140.MainLightRenderingModeValue = i1141[6]
  i1140.SupportsMainLightShadows = !!i1141[7]
  i1140.MixedLightingSupported = !!i1141[8]
  i1140.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i1141[9], i1140.MsaaQuality)
  i1140.MSAA = i1141[10]
  i1140.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i1141[11], i1140.OpaqueDownsampling)
  i1140.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i1141[12], i1140.MainLightShadowmapResolution)
  i1140.MainLightShadowmapResolutionValue = i1141[13]
  i1140.SupportsSoftShadows = !!i1141[14]
  i1140.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i1141[15], i1140.SoftShadowQuality)
  i1140.SoftShadowQualityValue = i1141[16]
  i1140.ShadowDistance = i1141[17]
  i1140.ShadowCascadeCount = i1141[18]
  i1140.Cascade2Split = i1141[19]
  i1140.Cascade3Split = new pc.Vec2( i1141[20], i1141[21] )
  i1140.Cascade4Split = new pc.Vec3( i1141[22], i1141[23], i1141[24] )
  i1140.CascadeBorder = i1141[25]
  i1140.ShadowDepthBias = i1141[26]
  i1140.ShadowNormalBias = i1141[27]
  i1140.RenderScale = i1141[28]
  i1140.RequireDepthTexture = !!i1141[29]
  i1140.RequireOpaqueTexture = !!i1141[30]
  i1140.SupportsHDR = !!i1141[31]
  i1140.SupportsTerrainHoles = !!i1141[32]
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i1143 = data
  i1142.Disabled = i1143[0]
  i1142.PerVertex = i1143[1]
  i1142.PerPixel = i1143[2]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i1145 = data
  i1144.LowDynamicRange = i1145[0]
  i1144.HighDynamicRange = i1145[1]
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i1147 = data
  i1146.Disabled = i1147[0]
  i1146._2x = i1147[1]
  i1146._4x = i1147[2]
  i1146._8x = i1147[3]
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i1149 = data
  i1148.None = i1149[0]
  i1148._2xBilinear = i1149[1]
  i1148._4xBox = i1149[2]
  i1148._4xBilinear = i1149[3]
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i1151 = data
  i1150._256 = i1151[0]
  i1150._512 = i1151[1]
  i1150._1024 = i1151[2]
  i1150._2048 = i1151[3]
  i1150._4096 = i1151[4]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i1153 = data
  i1152.UsePipelineSettings = i1153[0]
  i1152.Low = i1153[1]
  i1152.Medium = i1153[2]
  i1152.High = i1153[3]
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1155 = data
  var i1157 = i1155[0]
  var i1156 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1157[i + 0]));
  }
  i1154.ShaderCompilationErrors = i1156
  i1154.name = i1155[1]
  i1154.guid = i1155[2]
  var i1159 = i1155[3]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( i1159[i + 0] );
  }
  i1154.shaderDefinedKeywords = i1158
  var i1161 = i1155[4]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1161[i + 0]) );
  }
  i1154.passes = i1160
  var i1163 = i1155[5]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1163[i + 0]) );
  }
  i1154.usePasses = i1162
  var i1165 = i1155[6]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1165[i + 0]) );
  }
  i1154.defaultParameterValues = i1164
  request.r(i1155[7], i1155[8], 0, i1154, 'unityFallbackShader')
  i1154.readDepth = !!i1155[9]
  i1154.isCreatedByShaderGraph = !!i1155[10]
  i1154.compiled = !!i1155[11]
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1169 = data
  i1168.shaderName = i1169[0]
  i1168.errorMessage = i1169[1]
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1172 = root || new pc.UnityShaderPass()
  var i1173 = data
  i1172.id = i1173[0]
  i1172.subShaderIndex = i1173[1]
  i1172.name = i1173[2]
  i1172.passType = i1173[3]
  i1172.grabPassTextureName = i1173[4]
  i1172.usePass = !!i1173[5]
  i1172.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1173[6], i1172.zTest)
  i1172.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1173[7], i1172.zWrite)
  i1172.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1173[8], i1172.culling)
  i1172.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1173[9], i1172.blending)
  i1172.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1173[10], i1172.alphaBlending)
  i1172.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1173[11], i1172.colorWriteMask)
  i1172.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1173[12], i1172.offsetUnits)
  i1172.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1173[13], i1172.offsetFactor)
  i1172.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1173[14], i1172.stencilRef)
  i1172.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1173[15], i1172.stencilReadMask)
  i1172.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1173[16], i1172.stencilWriteMask)
  i1172.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1173[17], i1172.stencilOp)
  i1172.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1173[18], i1172.stencilOpFront)
  i1172.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1173[19], i1172.stencilOpBack)
  var i1175 = i1173[20]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1175[i + 0]) );
  }
  i1172.tags = i1174
  var i1177 = i1173[21]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( i1177[i + 0] );
  }
  i1172.passDefinedKeywords = i1176
  var i1179 = i1173[22]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1179[i + 0]) );
  }
  i1172.passDefinedKeywordGroups = i1178
  var i1181 = i1173[23]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1181[i + 0]) );
  }
  i1172.variants = i1180
  var i1183 = i1173[24]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1183[i + 0]) );
  }
  i1172.excludedVariants = i1182
  i1172.hasDepthReader = !!i1173[25]
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1185 = data
  i1184.val = i1185[0]
  i1184.name = i1185[1]
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1187 = data
  i1186.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1187[0], i1186.src)
  i1186.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1187[1], i1186.dst)
  i1186.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1187[2], i1186.op)
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1189 = data
  i1188.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1189[0], i1188.pass)
  i1188.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1189[1], i1188.fail)
  i1188.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1189[2], i1188.zFail)
  i1188.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1189[3], i1188.comp)
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1193 = data
  i1192.name = i1193[0]
  i1192.value = i1193[1]
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1197 = data
  var i1199 = i1197[0]
  var i1198 = []
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.push( i1199[i + 0] );
  }
  i1196.keywords = i1198
  i1196.hasDiscard = !!i1197[1]
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1203 = data
  i1202.passId = i1203[0]
  i1202.subShaderIndex = i1203[1]
  var i1205 = i1203[2]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.push( i1205[i + 0] );
  }
  i1202.keywords = i1204
  i1202.vertexProgram = i1203[3]
  i1202.fragmentProgram = i1203[4]
  i1202.exportedForWebGl2 = !!i1203[5]
  i1202.readDepth = !!i1203[6]
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1209 = data
  request.r(i1209[0], i1209[1], 0, i1208, 'shader')
  i1208.pass = i1209[2]
  return i1208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1213 = data
  i1212.name = i1213[0]
  i1212.type = i1213[1]
  i1212.value = new pc.Vec4( i1213[2], i1213[3], i1213[4], i1213[5] )
  i1212.textureValue = i1213[6]
  i1212.shaderPropertyFlag = i1213[7]
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1215 = data
  i1214.name = i1215[0]
  request.r(i1215[1], i1215[2], 0, i1214, 'texture')
  i1214.aabb = i1215[3]
  i1214.vertices = i1215[4]
  i1214.triangles = i1215[5]
  i1214.textureRect = UnityEngine.Rect.MinMaxRect(i1215[6], i1215[7], i1215[8], i1215[9])
  i1214.packedRect = UnityEngine.Rect.MinMaxRect(i1215[10], i1215[11], i1215[12], i1215[13])
  i1214.border = new pc.Vec4( i1215[14], i1215[15], i1215[16], i1215[17] )
  i1214.transparency = i1215[18]
  i1214.bounds = i1215[19]
  i1214.pixelsPerUnit = i1215[20]
  i1214.textureWidth = i1215[21]
  i1214.textureHeight = i1215[22]
  i1214.nativeSize = new pc.Vec2( i1215[23], i1215[24] )
  i1214.pivot = new pc.Vec2( i1215[25], i1215[26] )
  i1214.textureRectOffset = new pc.Vec2( i1215[27], i1215[28] )
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1217 = data
  i1216.name = i1217[0]
  i1216.wrapMode = i1217[1]
  i1216.isLooping = !!i1217[2]
  i1216.length = i1217[3]
  var i1219 = i1217[4]
  var i1218 = []
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1219[i + 0]) );
  }
  i1216.curves = i1218
  var i1221 = i1217[5]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1221[i + 0]) );
  }
  i1216.events = i1220
  i1216.halfPrecision = !!i1217[6]
  i1216._frameRate = i1217[7]
  i1216.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1217[8], i1216.localBounds)
  i1216.hasMuscleCurves = !!i1217[9]
  var i1223 = i1217[10]
  var i1222 = []
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.push( i1223[i + 0] );
  }
  i1216.clipMuscleConstant = i1222
  i1216.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1217[11], i1216.clipBindingConstant)
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1227 = data
  i1226.path = i1227[0]
  i1226.hash = i1227[1]
  i1226.componentType = i1227[2]
  i1226.property = i1227[3]
  i1226.keys = i1227[4]
  var i1229 = i1227[5]
  var i1228 = []
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1229[i + 0]) );
  }
  i1226.objectReferenceKeys = i1228
  return i1226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1233 = data
  i1232.time = i1233[0]
  request.r(i1233[1], i1233[2], 0, i1232, 'value')
  return i1232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1237 = data
  i1236.functionName = i1237[0]
  i1236.floatParameter = i1237[1]
  i1236.intParameter = i1237[2]
  i1236.stringParameter = i1237[3]
  request.r(i1237[4], i1237[5], 0, i1236, 'objectReferenceParameter')
  i1236.time = i1237[6]
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1239 = data
  i1238.center = new pc.Vec3( i1239[0], i1239[1], i1239[2] )
  i1238.extends = new pc.Vec3( i1239[3], i1239[4], i1239[5] )
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1243 = data
  var i1245 = i1243[0]
  var i1244 = []
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.push( i1245[i + 0] );
  }
  i1242.genericBindings = i1244
  var i1247 = i1243[1]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.push( i1247[i + 0] );
  }
  i1242.pptrCurveMapping = i1246
  return i1242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1249 = data
  i1248.name = i1249[0]
  i1248.ascent = i1249[1]
  i1248.originalLineHeight = i1249[2]
  i1248.fontSize = i1249[3]
  var i1251 = i1249[4]
  var i1250 = []
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1251[i + 0]) );
  }
  i1248.characterInfo = i1250
  request.r(i1249[5], i1249[6], 0, i1248, 'texture')
  i1248.originalFontSize = i1249[7]
  return i1248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1255 = data
  i1254.index = i1255[0]
  i1254.advance = i1255[1]
  i1254.bearing = i1255[2]
  i1254.glyphWidth = i1255[3]
  i1254.glyphHeight = i1255[4]
  i1254.minX = i1255[5]
  i1254.maxX = i1255[6]
  i1254.minY = i1255[7]
  i1254.maxY = i1255[8]
  i1254.uvBottomLeftX = i1255[9]
  i1254.uvBottomLeftY = i1255[10]
  i1254.uvBottomRightX = i1255[11]
  i1254.uvBottomRightY = i1255[12]
  i1254.uvTopLeftX = i1255[13]
  i1254.uvTopLeftY = i1255[14]
  i1254.uvTopRightX = i1255[15]
  i1254.uvTopRightY = i1255[16]
  return i1254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1257 = data
  i1256.name = i1257[0]
  var i1259 = i1257[1]
  var i1258 = []
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1259[i + 0]) );
  }
  i1256.layers = i1258
  var i1261 = i1257[2]
  var i1260 = []
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1261[i + 0]) );
  }
  i1256.parameters = i1260
  i1256.animationClips = i1257[3]
  i1256.avatarUnsupported = i1257[4]
  return i1256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1265 = data
  i1264.name = i1265[0]
  i1264.defaultWeight = i1265[1]
  i1264.blendingMode = i1265[2]
  i1264.avatarMask = i1265[3]
  i1264.syncedLayerIndex = i1265[4]
  i1264.syncedLayerAffectsTiming = !!i1265[5]
  i1264.syncedLayers = i1265[6]
  i1264.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1265[7], i1264.stateMachine)
  return i1264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1267 = data
  i1266.id = i1267[0]
  i1266.name = i1267[1]
  i1266.path = i1267[2]
  var i1269 = i1267[3]
  var i1268 = []
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1269[i + 0]) );
  }
  i1266.states = i1268
  var i1271 = i1267[4]
  var i1270 = []
  for(var i = 0; i < i1271.length; i += 1) {
    i1270.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1271[i + 0]) );
  }
  i1266.machines = i1270
  var i1273 = i1267[5]
  var i1272 = []
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1273[i + 0]) );
  }
  i1266.entryStateTransitions = i1272
  var i1275 = i1267[6]
  var i1274 = []
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1275[i + 0]) );
  }
  i1266.exitStateTransitions = i1274
  var i1277 = i1267[7]
  var i1276 = []
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1277[i + 0]) );
  }
  i1266.anyStateTransitions = i1276
  i1266.defaultStateId = i1267[8]
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1281 = data
  i1280.id = i1281[0]
  i1280.name = i1281[1]
  i1280.cycleOffset = i1281[2]
  i1280.cycleOffsetParameter = i1281[3]
  i1280.cycleOffsetParameterActive = !!i1281[4]
  i1280.mirror = !!i1281[5]
  i1280.mirrorParameter = i1281[6]
  i1280.mirrorParameterActive = !!i1281[7]
  i1280.motionId = i1281[8]
  i1280.nameHash = i1281[9]
  i1280.fullPathHash = i1281[10]
  i1280.speed = i1281[11]
  i1280.speedParameter = i1281[12]
  i1280.speedParameterActive = !!i1281[13]
  i1280.tag = i1281[14]
  i1280.tagHash = i1281[15]
  i1280.writeDefaultValues = !!i1281[16]
  var i1283 = i1281[17]
  var i1282 = []
  for(var i = 0; i < i1283.length; i += 2) {
  request.r(i1283[i + 0], i1283[i + 1], 2, i1282, '')
  }
  i1280.behaviours = i1282
  var i1285 = i1281[18]
  var i1284 = []
  for(var i = 0; i < i1285.length; i += 1) {
    i1284.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1285[i + 0]) );
  }
  i1280.transitions = i1284
  return i1280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1291 = data
  i1290.fullPath = i1291[0]
  i1290.canTransitionToSelf = !!i1291[1]
  i1290.duration = i1291[2]
  i1290.exitTime = i1291[3]
  i1290.hasExitTime = !!i1291[4]
  i1290.hasFixedDuration = !!i1291[5]
  i1290.interruptionSource = i1291[6]
  i1290.offset = i1291[7]
  i1290.orderedInterruption = !!i1291[8]
  i1290.destinationStateId = i1291[9]
  i1290.isExit = !!i1291[10]
  i1290.mute = !!i1291[11]
  i1290.solo = !!i1291[12]
  var i1293 = i1291[13]
  var i1292 = []
  for(var i = 0; i < i1293.length; i += 1) {
    i1292.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1293[i + 0]) );
  }
  i1290.conditions = i1292
  return i1290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1299 = data
  i1298.destinationStateId = i1299[0]
  i1298.isExit = !!i1299[1]
  i1298.mute = !!i1299[2]
  i1298.solo = !!i1299[3]
  var i1301 = i1299[4]
  var i1300 = []
  for(var i = 0; i < i1301.length; i += 1) {
    i1300.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1301[i + 0]) );
  }
  i1298.conditions = i1300
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1305 = data
  i1304.defaultBool = !!i1305[0]
  i1304.defaultFloat = i1305[1]
  i1304.defaultInt = i1305[2]
  i1304.name = i1305[3]
  i1304.nameHash = i1305[4]
  i1304.type = i1305[5]
  return i1304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1307 = data
  i1306.name = i1307[0]
  i1306.bytes64 = i1307[1]
  i1306.data = i1307[2]
  return i1306
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1308 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1309 = data
  i1308.hashCode = i1309[0]
  request.r(i1309[1], i1309[2], 0, i1308, 'material')
  i1308.materialHashCode = i1309[3]
  request.r(i1309[4], i1309[5], 0, i1308, 'atlas')
  i1308.normalStyle = i1309[6]
  i1308.normalSpacingOffset = i1309[7]
  i1308.boldStyle = i1309[8]
  i1308.boldSpacing = i1309[9]
  i1308.italicStyle = i1309[10]
  i1308.tabSize = i1309[11]
  i1308.m_Version = i1309[12]
  i1308.m_SourceFontFileGUID = i1309[13]
  request.r(i1309[14], i1309[15], 0, i1308, 'm_SourceFontFile_EditorRef')
  request.r(i1309[16], i1309[17], 0, i1308, 'm_SourceFontFile')
  i1308.m_AtlasPopulationMode = i1309[18]
  i1308.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1309[19], i1308.m_FaceInfo)
  var i1311 = i1309[20]
  var i1310 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1311.length; i += 1) {
    i1310.add(request.d('UnityEngine.TextCore.Glyph', i1311[i + 0]));
  }
  i1308.m_GlyphTable = i1310
  var i1313 = i1309[21]
  var i1312 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.add(request.d('TMPro.TMP_Character', i1313[i + 0]));
  }
  i1308.m_CharacterTable = i1312
  var i1315 = i1309[22]
  var i1314 = []
  for(var i = 0; i < i1315.length; i += 2) {
  request.r(i1315[i + 0], i1315[i + 1], 2, i1314, '')
  }
  i1308.m_AtlasTextures = i1314
  i1308.m_AtlasTextureIndex = i1309[23]
  i1308.m_IsMultiAtlasTexturesEnabled = !!i1309[24]
  i1308.m_ClearDynamicDataOnBuild = !!i1309[25]
  var i1317 = i1309[26]
  var i1316 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.add(request.d('UnityEngine.TextCore.GlyphRect', i1317[i + 0]));
  }
  i1308.m_UsedGlyphRects = i1316
  var i1319 = i1309[27]
  var i1318 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1319.length; i += 1) {
    i1318.add(request.d('UnityEngine.TextCore.GlyphRect', i1319[i + 0]));
  }
  i1308.m_FreeGlyphRects = i1318
  i1308.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1309[28], i1308.m_fontInfo)
  i1308.m_AtlasWidth = i1309[29]
  i1308.m_AtlasHeight = i1309[30]
  i1308.m_AtlasPadding = i1309[31]
  i1308.m_AtlasRenderMode = i1309[32]
  var i1321 = i1309[33]
  var i1320 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.add(request.d('TMPro.TMP_Glyph', i1321[i + 0]));
  }
  i1308.m_glyphInfoList = i1320
  i1308.m_KerningTable = request.d('TMPro.KerningTable', i1309[34], i1308.m_KerningTable)
  i1308.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1309[35], i1308.m_FontFeatureTable)
  var i1323 = i1309[36]
  var i1322 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1323.length; i += 2) {
  request.r(i1323[i + 0], i1323[i + 1], 1, i1322, '')
  }
  i1308.fallbackFontAssets = i1322
  var i1325 = i1309[37]
  var i1324 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1325.length; i += 2) {
  request.r(i1325[i + 0], i1325[i + 1], 1, i1324, '')
  }
  i1308.m_FallbackFontAssetTable = i1324
  i1308.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1309[38], i1308.m_CreationSettings)
  var i1327 = i1309[39]
  var i1326 = []
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.push( request.d('TMPro.TMP_FontWeightPair', i1327[i + 0]) );
  }
  i1308.m_FontWeightTable = i1326
  var i1329 = i1309[40]
  var i1328 = []
  for(var i = 0; i < i1329.length; i += 1) {
    i1328.push( request.d('TMPro.TMP_FontWeightPair', i1329[i + 0]) );
  }
  i1308.fontWeights = i1328
  return i1308
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1330 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1331 = data
  i1330.m_FaceIndex = i1331[0]
  i1330.m_FamilyName = i1331[1]
  i1330.m_StyleName = i1331[2]
  i1330.m_PointSize = i1331[3]
  i1330.m_Scale = i1331[4]
  i1330.m_UnitsPerEM = i1331[5]
  i1330.m_LineHeight = i1331[6]
  i1330.m_AscentLine = i1331[7]
  i1330.m_CapLine = i1331[8]
  i1330.m_MeanLine = i1331[9]
  i1330.m_Baseline = i1331[10]
  i1330.m_DescentLine = i1331[11]
  i1330.m_SuperscriptOffset = i1331[12]
  i1330.m_SuperscriptSize = i1331[13]
  i1330.m_SubscriptOffset = i1331[14]
  i1330.m_SubscriptSize = i1331[15]
  i1330.m_UnderlineOffset = i1331[16]
  i1330.m_UnderlineThickness = i1331[17]
  i1330.m_StrikethroughOffset = i1331[18]
  i1330.m_StrikethroughThickness = i1331[19]
  i1330.m_TabWidth = i1331[20]
  return i1330
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1334 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1335 = data
  i1334.m_Index = i1335[0]
  i1334.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1335[1], i1334.m_Metrics)
  i1334.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1335[2], i1334.m_GlyphRect)
  i1334.m_Scale = i1335[3]
  i1334.m_AtlasIndex = i1335[4]
  i1334.m_ClassDefinitionType = i1335[5]
  return i1334
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1336 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1337 = data
  i1336.m_Width = i1337[0]
  i1336.m_Height = i1337[1]
  i1336.m_HorizontalBearingX = i1337[2]
  i1336.m_HorizontalBearingY = i1337[3]
  i1336.m_HorizontalAdvance = i1337[4]
  return i1336
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1338 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1339 = data
  i1338.m_X = i1339[0]
  i1338.m_Y = i1339[1]
  i1338.m_Width = i1339[2]
  i1338.m_Height = i1339[3]
  return i1338
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1342 = root || request.c( 'TMPro.TMP_Character' )
  var i1343 = data
  i1342.m_ElementType = i1343[0]
  i1342.m_Unicode = i1343[1]
  i1342.m_GlyphIndex = i1343[2]
  i1342.m_Scale = i1343[3]
  return i1342
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1348 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1349 = data
  i1348.Name = i1349[0]
  i1348.PointSize = i1349[1]
  i1348.Scale = i1349[2]
  i1348.CharacterCount = i1349[3]
  i1348.LineHeight = i1349[4]
  i1348.Baseline = i1349[5]
  i1348.Ascender = i1349[6]
  i1348.CapHeight = i1349[7]
  i1348.Descender = i1349[8]
  i1348.CenterLine = i1349[9]
  i1348.SuperscriptOffset = i1349[10]
  i1348.SubscriptOffset = i1349[11]
  i1348.SubSize = i1349[12]
  i1348.Underline = i1349[13]
  i1348.UnderlineThickness = i1349[14]
  i1348.strikethrough = i1349[15]
  i1348.strikethroughThickness = i1349[16]
  i1348.TabWidth = i1349[17]
  i1348.Padding = i1349[18]
  i1348.AtlasWidth = i1349[19]
  i1348.AtlasHeight = i1349[20]
  return i1348
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1352 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1353 = data
  i1352.id = i1353[0]
  i1352.x = i1353[1]
  i1352.y = i1353[2]
  i1352.width = i1353[3]
  i1352.height = i1353[4]
  i1352.xOffset = i1353[5]
  i1352.yOffset = i1353[6]
  i1352.xAdvance = i1353[7]
  i1352.scale = i1353[8]
  return i1352
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1354 = root || request.c( 'TMPro.KerningTable' )
  var i1355 = data
  var i1357 = i1355[0]
  var i1356 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1357.length; i += 1) {
    i1356.add(request.d('TMPro.KerningPair', i1357[i + 0]));
  }
  i1354.kerningPairs = i1356
  return i1354
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1360 = root || request.c( 'TMPro.KerningPair' )
  var i1361 = data
  i1360.xOffset = i1361[0]
  i1360.m_FirstGlyph = i1361[1]
  i1360.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1361[2], i1360.m_FirstGlyphAdjustments)
  i1360.m_SecondGlyph = i1361[3]
  i1360.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1361[4], i1360.m_SecondGlyphAdjustments)
  i1360.m_IgnoreSpacingAdjustments = !!i1361[5]
  return i1360
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1362 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1363 = data
  var i1365 = i1363[0]
  var i1364 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1365.length; i += 1) {
    i1364.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1365[i + 0]));
  }
  i1362.m_GlyphPairAdjustmentRecords = i1364
  return i1362
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1368 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1369 = data
  i1368.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1369[0], i1368.m_FirstAdjustmentRecord)
  i1368.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1369[1], i1368.m_SecondAdjustmentRecord)
  i1368.m_FeatureLookupFlags = i1369[2]
  return i1368
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1372 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1373 = data
  i1372.sourceFontFileName = i1373[0]
  i1372.sourceFontFileGUID = i1373[1]
  i1372.pointSizeSamplingMode = i1373[2]
  i1372.pointSize = i1373[3]
  i1372.padding = i1373[4]
  i1372.packingMode = i1373[5]
  i1372.atlasWidth = i1373[6]
  i1372.atlasHeight = i1373[7]
  i1372.characterSetSelectionMode = i1373[8]
  i1372.characterSequence = i1373[9]
  i1372.referencedFontAssetGUID = i1373[10]
  i1372.referencedTextAssetGUID = i1373[11]
  i1372.fontStyle = i1373[12]
  i1372.fontStyleModifier = i1373[13]
  i1372.renderMode = i1373[14]
  i1372.includeFontFeatures = !!i1373[15]
  return i1372
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1376 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1377 = data
  request.r(i1377[0], i1377[1], 0, i1376, 'regularTypeface')
  request.r(i1377[2], i1377[3], 0, i1376, 'italicTypeface')
  return i1376
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i1378 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i1379 = data
  var i1381 = i1379[0]
  var i1380 = []
  for(var i = 0; i < i1381.length; i += 2) {
  request.r(i1381[i + 0], i1381[i + 1], 2, i1380, '')
  }
  i1378.atlasAssets = i1380
  i1378.scale = i1379[1]
  request.r(i1379[2], i1379[3], 0, i1378, 'skeletonJSON')
  i1378.isUpgradingBlendModeMaterials = !!i1379[4]
  i1378.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i1379[5], i1378.blendModeMaterials)
  var i1383 = i1379[6]
  var i1382 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i1383.length; i += 2) {
  request.r(i1383[i + 0], i1383[i + 1], 1, i1382, '')
  }
  i1378.skeletonDataModifiers = i1382
  var i1385 = i1379[7]
  var i1384 = []
  for(var i = 0; i < i1385.length; i += 1) {
    i1384.push( i1385[i + 0] );
  }
  i1378.fromAnimation = i1384
  var i1387 = i1379[8]
  var i1386 = []
  for(var i = 0; i < i1387.length; i += 1) {
    i1386.push( i1387[i + 0] );
  }
  i1378.toAnimation = i1386
  i1378.duration = i1379[9]
  i1378.defaultMix = i1379[10]
  request.r(i1379[11], i1379[12], 0, i1378, 'controller')
  return i1378
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i1390 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i1391 = data
  i1390.applyAdditiveMaterial = !!i1391[0]
  var i1393 = i1391[1]
  var i1392 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1393.length; i += 1) {
    i1392.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1393[i + 0]));
  }
  i1390.additiveMaterials = i1392
  var i1395 = i1391[2]
  var i1394 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1395.length; i += 1) {
    i1394.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1395[i + 0]));
  }
  i1390.multiplyMaterials = i1394
  var i1397 = i1391[3]
  var i1396 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i1397.length; i += 1) {
    i1396.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i1397[i + 0]));
  }
  i1390.screenMaterials = i1396
  i1390.requiresBlendModeMaterials = !!i1391[4]
  return i1390
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i1400 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i1401 = data
  i1400.pageName = i1401[0]
  request.r(i1401[1], i1401[2], 0, i1400, 'material')
  return i1400
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i1404 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i1405 = data
  request.r(i1405[0], i1405[1], 0, i1404, 'atlasFile')
  var i1407 = i1405[2]
  var i1406 = []
  for(var i = 0; i < i1407.length; i += 2) {
  request.r(i1407[i + 0], i1407[i + 1], 2, i1406, '')
  }
  i1404.materials = i1406
  return i1404
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1408 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1409 = data
  i1408.useSafeMode = !!i1409[0]
  i1408.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1409[1], i1408.safeModeOptions)
  i1408.timeScale = i1409[2]
  i1408.unscaledTimeScale = i1409[3]
  i1408.useSmoothDeltaTime = !!i1409[4]
  i1408.maxSmoothUnscaledTime = i1409[5]
  i1408.rewindCallbackMode = i1409[6]
  i1408.showUnityEditorReport = !!i1409[7]
  i1408.logBehaviour = i1409[8]
  i1408.drawGizmos = !!i1409[9]
  i1408.defaultRecyclable = !!i1409[10]
  i1408.defaultAutoPlay = i1409[11]
  i1408.defaultUpdateType = i1409[12]
  i1408.defaultTimeScaleIndependent = !!i1409[13]
  i1408.defaultEaseType = i1409[14]
  i1408.defaultEaseOvershootOrAmplitude = i1409[15]
  i1408.defaultEasePeriod = i1409[16]
  i1408.defaultAutoKill = !!i1409[17]
  i1408.defaultLoopType = i1409[18]
  i1408.debugMode = !!i1409[19]
  i1408.debugStoreTargetId = !!i1409[20]
  i1408.showPreviewPanel = !!i1409[21]
  i1408.storeSettingsLocation = i1409[22]
  i1408.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1409[23], i1408.modules)
  i1408.createASMDEF = !!i1409[24]
  i1408.showPlayingTweens = !!i1409[25]
  i1408.showPausedTweens = !!i1409[26]
  return i1408
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1410 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1411 = data
  i1410.logBehaviour = i1411[0]
  i1410.nestedTweenFailureBehaviour = i1411[1]
  return i1410
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1412 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1413 = data
  i1412.showPanel = !!i1413[0]
  i1412.audioEnabled = !!i1413[1]
  i1412.physicsEnabled = !!i1413[2]
  i1412.physics2DEnabled = !!i1413[3]
  i1412.spriteEnabled = !!i1413[4]
  i1412.uiEnabled = !!i1413[5]
  i1412.textMeshProEnabled = !!i1413[6]
  i1412.tk2DEnabled = !!i1413[7]
  i1412.deAudioEnabled = !!i1413[8]
  i1412.deUnityExtendedEnabled = !!i1413[9]
  i1412.epoOutlineEnabled = !!i1413[10]
  return i1412
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1414 = root || request.c( 'TMPro.TMP_Settings' )
  var i1415 = data
  i1414.m_enableWordWrapping = !!i1415[0]
  i1414.m_enableKerning = !!i1415[1]
  i1414.m_enableExtraPadding = !!i1415[2]
  i1414.m_enableTintAllSprites = !!i1415[3]
  i1414.m_enableParseEscapeCharacters = !!i1415[4]
  i1414.m_EnableRaycastTarget = !!i1415[5]
  i1414.m_GetFontFeaturesAtRuntime = !!i1415[6]
  i1414.m_missingGlyphCharacter = i1415[7]
  i1414.m_warningsDisabled = !!i1415[8]
  request.r(i1415[9], i1415[10], 0, i1414, 'm_defaultFontAsset')
  i1414.m_defaultFontAssetPath = i1415[11]
  i1414.m_defaultFontSize = i1415[12]
  i1414.m_defaultAutoSizeMinRatio = i1415[13]
  i1414.m_defaultAutoSizeMaxRatio = i1415[14]
  i1414.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1415[15], i1415[16] )
  i1414.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1415[17], i1415[18] )
  i1414.m_autoSizeTextContainer = !!i1415[19]
  i1414.m_IsTextObjectScaleStatic = !!i1415[20]
  var i1417 = i1415[21]
  var i1416 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1417.length; i += 2) {
  request.r(i1417[i + 0], i1417[i + 1], 1, i1416, '')
  }
  i1414.m_fallbackFontAssets = i1416
  i1414.m_matchMaterialPreset = !!i1415[22]
  request.r(i1415[23], i1415[24], 0, i1414, 'm_defaultSpriteAsset')
  i1414.m_defaultSpriteAssetPath = i1415[25]
  i1414.m_enableEmojiSupport = !!i1415[26]
  i1414.m_MissingCharacterSpriteUnicode = i1415[27]
  i1414.m_defaultColorGradientPresetsPath = i1415[28]
  request.r(i1415[29], i1415[30], 0, i1414, 'm_defaultStyleSheet')
  i1414.m_StyleSheetsResourcePath = i1415[31]
  request.r(i1415[32], i1415[33], 0, i1414, 'm_leadingCharacters')
  request.r(i1415[34], i1415[35], 0, i1414, 'm_followingCharacters')
  i1414.m_UseModernHangulLineBreakingRules = !!i1415[36]
  return i1414
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1418 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1419 = data
  i1418.hashCode = i1419[0]
  request.r(i1419[1], i1419[2], 0, i1418, 'material')
  i1418.materialHashCode = i1419[3]
  request.r(i1419[4], i1419[5], 0, i1418, 'spriteSheet')
  var i1421 = i1419[6]
  var i1420 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1421.length; i += 1) {
    i1420.add(request.d('TMPro.TMP_Sprite', i1421[i + 0]));
  }
  i1418.spriteInfoList = i1420
  var i1423 = i1419[7]
  var i1422 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1423.length; i += 2) {
  request.r(i1423[i + 0], i1423[i + 1], 1, i1422, '')
  }
  i1418.fallbackSpriteAssets = i1422
  i1418.m_Version = i1419[8]
  i1418.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1419[9], i1418.m_FaceInfo)
  var i1425 = i1419[10]
  var i1424 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1425.length; i += 1) {
    i1424.add(request.d('TMPro.TMP_SpriteCharacter', i1425[i + 0]));
  }
  i1418.m_SpriteCharacterTable = i1424
  var i1427 = i1419[11]
  var i1426 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1427.length; i += 1) {
    i1426.add(request.d('TMPro.TMP_SpriteGlyph', i1427[i + 0]));
  }
  i1418.m_SpriteGlyphTable = i1426
  return i1418
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1430 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1431 = data
  i1430.name = i1431[0]
  i1430.hashCode = i1431[1]
  i1430.unicode = i1431[2]
  i1430.pivot = new pc.Vec2( i1431[3], i1431[4] )
  request.r(i1431[5], i1431[6], 0, i1430, 'sprite')
  i1430.id = i1431[7]
  i1430.x = i1431[8]
  i1430.y = i1431[9]
  i1430.width = i1431[10]
  i1430.height = i1431[11]
  i1430.xOffset = i1431[12]
  i1430.yOffset = i1431[13]
  i1430.xAdvance = i1431[14]
  i1430.scale = i1431[15]
  return i1430
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1436 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1437 = data
  i1436.m_Name = i1437[0]
  i1436.m_HashCode = i1437[1]
  i1436.m_ElementType = i1437[2]
  i1436.m_Unicode = i1437[3]
  i1436.m_GlyphIndex = i1437[4]
  i1436.m_Scale = i1437[5]
  return i1436
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1440 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1441 = data
  request.r(i1441[0], i1441[1], 0, i1440, 'sprite')
  i1440.m_Index = i1441[2]
  i1440.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1441[3], i1440.m_Metrics)
  i1440.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1441[4], i1440.m_GlyphRect)
  i1440.m_Scale = i1441[5]
  i1440.m_AtlasIndex = i1441[6]
  i1440.m_ClassDefinitionType = i1441[7]
  return i1440
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1442 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1443 = data
  var i1445 = i1443[0]
  var i1444 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1445.length; i += 1) {
    i1444.add(request.d('TMPro.TMP_Style', i1445[i + 0]));
  }
  i1442.m_StyleList = i1444
  return i1442
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1448 = root || request.c( 'TMPro.TMP_Style' )
  var i1449 = data
  i1448.m_Name = i1449[0]
  i1448.m_HashCode = i1449[1]
  i1448.m_OpeningDefinition = i1449[2]
  i1448.m_ClosingDefinition = i1449[3]
  i1448.m_OpeningTagArray = i1449[4]
  i1448.m_ClosingTagArray = i1449[5]
  i1448.m_OpeningTagUnicodeArray = i1449[6]
  i1448.m_ClosingTagUnicodeArray = i1449[7]
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1451 = data
  var i1453 = i1451[0]
  var i1452 = []
  for(var i = 0; i < i1453.length; i += 1) {
    i1452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1453[i + 0]) );
  }
  i1450.files = i1452
  i1450.componentToPrefabIds = i1451[1]
  return i1450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1457 = data
  i1456.path = i1457[0]
  request.r(i1457[1], i1457[2], 0, i1456, 'unityObject')
  return i1456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1459 = data
  var i1461 = i1459[0]
  var i1460 = []
  for(var i = 0; i < i1461.length; i += 1) {
    i1460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1461[i + 0]) );
  }
  i1458.scriptsExecutionOrder = i1460
  var i1463 = i1459[1]
  var i1462 = []
  for(var i = 0; i < i1463.length; i += 1) {
    i1462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1463[i + 0]) );
  }
  i1458.sortingLayers = i1462
  var i1465 = i1459[2]
  var i1464 = []
  for(var i = 0; i < i1465.length; i += 1) {
    i1464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1465[i + 0]) );
  }
  i1458.cullingLayers = i1464
  i1458.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1459[3], i1458.timeSettings)
  i1458.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1459[4], i1458.physicsSettings)
  i1458.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1459[5], i1458.physics2DSettings)
  i1458.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1459[6], i1458.qualitySettings)
  i1458.enableRealtimeShadows = !!i1459[7]
  i1458.enableAutoInstancing = !!i1459[8]
  i1458.enableDynamicBatching = !!i1459[9]
  i1458.lightmapEncodingQuality = i1459[10]
  i1458.desiredColorSpace = i1459[11]
  var i1467 = i1459[12]
  var i1466 = []
  for(var i = 0; i < i1467.length; i += 1) {
    i1466.push( i1467[i + 0] );
  }
  i1458.allTags = i1466
  return i1458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1471 = data
  i1470.name = i1471[0]
  i1470.value = i1471[1]
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1475 = data
  i1474.id = i1475[0]
  i1474.name = i1475[1]
  i1474.value = i1475[2]
  return i1474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1479 = data
  i1478.id = i1479[0]
  i1478.name = i1479[1]
  return i1478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1481 = data
  i1480.fixedDeltaTime = i1481[0]
  i1480.maximumDeltaTime = i1481[1]
  i1480.timeScale = i1481[2]
  i1480.maximumParticleTimestep = i1481[3]
  return i1480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1483 = data
  i1482.gravity = new pc.Vec3( i1483[0], i1483[1], i1483[2] )
  i1482.defaultSolverIterations = i1483[3]
  i1482.bounceThreshold = i1483[4]
  i1482.autoSyncTransforms = !!i1483[5]
  i1482.autoSimulation = !!i1483[6]
  var i1485 = i1483[7]
  var i1484 = []
  for(var i = 0; i < i1485.length; i += 1) {
    i1484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1485[i + 0]) );
  }
  i1482.collisionMatrix = i1484
  return i1482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1489 = data
  i1488.enabled = !!i1489[0]
  i1488.layerId = i1489[1]
  i1488.otherLayerId = i1489[2]
  return i1488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1491 = data
  request.r(i1491[0], i1491[1], 0, i1490, 'material')
  i1490.gravity = new pc.Vec2( i1491[2], i1491[3] )
  i1490.positionIterations = i1491[4]
  i1490.velocityIterations = i1491[5]
  i1490.velocityThreshold = i1491[6]
  i1490.maxLinearCorrection = i1491[7]
  i1490.maxAngularCorrection = i1491[8]
  i1490.maxTranslationSpeed = i1491[9]
  i1490.maxRotationSpeed = i1491[10]
  i1490.baumgarteScale = i1491[11]
  i1490.baumgarteTOIScale = i1491[12]
  i1490.timeToSleep = i1491[13]
  i1490.linearSleepTolerance = i1491[14]
  i1490.angularSleepTolerance = i1491[15]
  i1490.defaultContactOffset = i1491[16]
  i1490.autoSimulation = !!i1491[17]
  i1490.queriesHitTriggers = !!i1491[18]
  i1490.queriesStartInColliders = !!i1491[19]
  i1490.callbacksOnDisable = !!i1491[20]
  i1490.reuseCollisionCallbacks = !!i1491[21]
  i1490.autoSyncTransforms = !!i1491[22]
  var i1493 = i1491[23]
  var i1492 = []
  for(var i = 0; i < i1493.length; i += 1) {
    i1492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1493[i + 0]) );
  }
  i1490.collisionMatrix = i1492
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1497 = data
  i1496.enabled = !!i1497[0]
  i1496.layerId = i1497[1]
  i1496.otherLayerId = i1497[2]
  return i1496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1499 = data
  var i1501 = i1499[0]
  var i1500 = []
  for(var i = 0; i < i1501.length; i += 1) {
    i1500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1501[i + 0]) );
  }
  i1498.qualityLevels = i1500
  var i1503 = i1499[1]
  var i1502 = []
  for(var i = 0; i < i1503.length; i += 1) {
    i1502.push( i1503[i + 0] );
  }
  i1498.names = i1502
  i1498.shadows = i1499[2]
  i1498.anisotropicFiltering = i1499[3]
  i1498.antiAliasing = i1499[4]
  i1498.lodBias = i1499[5]
  i1498.shadowCascades = i1499[6]
  i1498.shadowDistance = i1499[7]
  i1498.shadowmaskMode = i1499[8]
  i1498.shadowProjection = i1499[9]
  i1498.shadowResolution = i1499[10]
  i1498.softParticles = !!i1499[11]
  i1498.softVegetation = !!i1499[12]
  i1498.activeColorSpace = i1499[13]
  i1498.desiredColorSpace = i1499[14]
  i1498.masterTextureLimit = i1499[15]
  i1498.maxQueuedFrames = i1499[16]
  i1498.particleRaycastBudget = i1499[17]
  i1498.pixelLightCount = i1499[18]
  i1498.realtimeReflectionProbes = !!i1499[19]
  i1498.shadowCascade2Split = i1499[20]
  i1498.shadowCascade4Split = new pc.Vec3( i1499[21], i1499[22], i1499[23] )
  i1498.streamingMipmapsActive = !!i1499[24]
  i1498.vSyncCount = i1499[25]
  i1498.asyncUploadBufferSize = i1499[26]
  i1498.asyncUploadTimeSlice = i1499[27]
  i1498.billboardsFaceCameraPosition = !!i1499[28]
  i1498.shadowNearPlaneOffset = i1499[29]
  i1498.streamingMipmapsMemoryBudget = i1499[30]
  i1498.maximumLODLevel = i1499[31]
  i1498.streamingMipmapsAddAllCameras = !!i1499[32]
  i1498.streamingMipmapsMaxLevelReduction = i1499[33]
  i1498.streamingMipmapsRenderersPerFrame = i1499[34]
  i1498.resolutionScalingFixedDPIFactor = i1499[35]
  i1498.streamingMipmapsMaxFileIORequests = i1499[36]
  i1498.currentQualityLevel = i1499[37]
  return i1498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1509 = data
  i1508.weight = i1509[0]
  i1508.vertices = i1509[1]
  i1508.normals = i1509[2]
  i1508.tangents = i1509[3]
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1513 = data
  i1512.mode = i1513[0]
  i1512.parameter = i1513[1]
  i1512.threshold = i1513[2]
  return i1512
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1514 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1515 = data
  i1514.xPlacement = i1515[0]
  i1514.yPlacement = i1515[1]
  i1514.xAdvance = i1515[2]
  i1514.yAdvance = i1515[3]
  return i1514
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1516 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1517 = data
  i1516.m_GlyphIndex = i1517[0]
  i1516.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1517[1], i1516.m_GlyphValueRecord)
  return i1516
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1518 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1519 = data
  i1518.m_XPlacement = i1519[0]
  i1518.m_YPlacement = i1519[1]
  i1518.m_XAdvance = i1519[2]
  i1518.m_YAdvance = i1519[3]
  return i1518
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"82":[83],"84":[83],"85":[83],"86":[83],"87":[83],"88":[83],"89":[90],"91":[11],"92":[93],"94":[93],"95":[93],"96":[93],"97":[93],"98":[93],"99":[93],"100":[101],"102":[101],"103":[101],"104":[101],"105":[101],"106":[101],"107":[101],"108":[101],"109":[101],"110":[101],"111":[101],"112":[101],"113":[101],"114":[11],"115":[33],"116":[117],"118":[117],"15":[14],"119":[11],"13":[11],"30":[29],"120":[14],"121":[19,14],"122":[33],"27":[19,14],"123":[22,33],"124":[33],"125":[33,32],"126":[93],"127":[101],"128":[129],"130":[131],"132":[14],"133":[33,14],"24":[14,19],"134":[14],"135":[19,14],"136":[33],"137":[19,14],"138":[14],"139":[140],"141":[14],"142":[14],"18":[15],"20":[19,14],"143":[14],"17":[15],"40":[14],"144":[14],"66":[14],"145":[14],"45":[14],"146":[14],"39":[14],"35":[14],"147":[14],"148":[19,14],"149":[14],"47":[14],"44":[14],"150":[14],"43":[19,14],"51":[14],"151":[36],"152":[36],"37":[36],"153":[36],"154":[11],"155":[11],"58":[14],"156":[140],"157":[140]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MonoBehaviour","Do.AudioManager","UnityEngine.AudioSource","LunaManager","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Button","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonDataAsset","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.SpriteRenderer","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.BoxCollider","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.Text","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.Font","UnityEngine.UI.Scrollbar","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.GameObject","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonSubmeshGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.21f1";

Deserializers.productName = "Luna_Thread";

Deserializers.lunaInitializationTime = "07/08/2025 05:27:13";

Deserializers.lunaDaysRunning = "0.3";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "31205";

Deserializers.projectId = "3d0a44f13a17b7c4e89d93f07627170f";

Deserializers.packagesInfo = "com.unity.nuget.newtonsoft-json: 3.2.1\ncom.unity.render-pipelines.universal: 12.1.10\ncom.unity.textmeshpro: 3.0.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1757";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5280";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.Luna_Thread";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "e138bd01-cf07-452a-ace3-d460000aca6e";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["Unity","Collections","NativeLeakDetection","Initialize"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Rendering","Universal","XRSystem","XRSystemInit"]],[["Spine","Unity","AttachmentTools","AtlasUtilities","Init"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

