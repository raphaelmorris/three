const canvas = document.querySelector('.webgl')
const scene = new THREE.Scene()

//Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xFF0000})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

//Size
const sizes = {
    width: 800,
    height: 600
}

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 2
camera.position.x = 1
scene.add(camera)

//Render
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)