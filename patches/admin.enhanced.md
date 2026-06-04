# Tot ! Admin Enhanced

## 0.9.0 alpha
- Deprecating Chat V1 Scripting nodes and related fields
- Added new Chat V2 Scripting nodes and related fields
- Added support of Regions to the admin map
- Players can now display their quests objectives on their map, providing they have a location
- Converted all the commands to Chat V2 Commands
- Replaced the Map Marker nodes with a V2 variant, that instead take a Guid for identifier, removing the need to get the returning marker id and having to store it. They also come with a number of new parameters.
- Deprecating Client Environment nodes relative to sky color
- Added a new Client Environment node that is compatible with new Environment overrides
- Added a new Moon Texture node that change the texture for the client
- Improved the Admin markers to offer new possibilities, such as color, ordering, radius.
- Removed pre-colored markers, as now the marker system can apply a chosen color.
- Added Burst Mode node, effectively making following nodes run on the same frame until the end of the script or the mode is toggled off.