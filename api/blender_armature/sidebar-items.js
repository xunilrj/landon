initSidebarItems({"enum":[["Axis",""],["BlenderError","Something went wrong in the Blender child process that was trying to parse your armature data."],["Bone","A bone in an armature. Can either be a dual quaternion or a matrix. When you export bones from Blender they come as matrices - BlenderArmature lets you convert them into dual quaternions which are usually more favorable for when implementing skeletal animation with rigid transformations."],["FlattenArmatureError","An error when trying to flatten your exported data across multiple files into one HashMap of armature name to armature data."],["Hand","Represents the orientation of the coordinate system using the right hand rule."],["JointIndicesRef","The joints to sample."]],"fn":[["blend_towards_bones","Blend from the start bones towards the ending bones."],["flatten_exported_armatures","Convert ArmatureeshByFilename into a HashMap<ArmatureName, BlenderArmature> that flattens all of the armatures across all of the files into one HashMap."],["get_surrounding_keyframes","If you're sampling frame 1.5 and there are three keyframes - 0, 2, 3 the surrounding keyframes are 0 and 2."],["interpolate_bone","Interpolate from the start to the end bone using the given amount between [0.0, 1.0] inclusive."],["interpolate_dual_quats","Interpolate from the start to the end bone using the given amount between [0.0, 1.0] inclusive."],["linear_200_milliseconds","Returns 0.0 if no time has elapsed. Returns 0.5 if 100 milliseconds have elapsed. Returns 1.0 if >= 200 milliseconds have elapsed"],["parse_armatures_from_blender_stdout","Given a buffer of standard output from Blender we parse all of the armature JSON that was written to stdout by `blender-armature-to-json.py`."]],"struct":[["Action","A set of keyframes along with metadata such as pose markers."],["ActionKeyframes","All of the keyframes in an action."],["BlenderArmature","All of the data about a Blender armature that we've exported from Blender. A BlenderArmature should have all of the data that you need to implement skeletal animation."],["BoneKeyframe","The transformation for a bone at a particular time"],["BoneKeyframes","The keyframes for the transformations for a bone"],["CoordinateSystem","A coordinate system is used to make sense of coordinates."],["FrameOffset","Describes some number of frames to offset from some other frame. Useful for sampling keyframes."],["Keyframe","The pose bones at an individual keyframe time"],["SampleDesc","Describes how to sample animation keyframes"],["SortedKeyframes","Keyframes sorted in ascending frame order"]],"type":[["ArmaturesByArmatureName",""],["ArmaturesByFilename",""]]});