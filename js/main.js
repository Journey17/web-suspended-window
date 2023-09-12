document.addEventListener('DOMContentLoaded', function () {
  // 获取图标和内容元素的NodeList
  const icons = document.querySelectorAll('.i-icon')
  const infoContainers = document.querySelectorAll('.info-container')
  const backToTopIcon = document.querySelector('.i-icon-to-top')

  let hoverTimeout // 声明一个变量用于延迟隐藏内容

  // 添加事件处理程序
  icons.forEach((icon, index) => {
    icon.addEventListener('mouseenter', () => {
      // 鼠标进入图标时显示相应的内容
      clearTimeout(hoverTimeout) // 清除之前的延迟隐藏
      infoContainers.forEach((container) => {
        container.classList.remove('active') // 移除active类以隐藏所有内容
      })
      if (infoContainers[index]) {
        infoContainers[index].classList.add('active') // 添加active类以显示相应的内容
      }
    })

    icon.addEventListener('mouseleave', () => {
      // 鼠标离开图标时延迟隐藏内容
      hoverTimeout = setTimeout(() => {
        infoContainers.forEach((container) => {
          container.classList.remove('active')
        })
      }, 500) // 500毫秒延迟隐藏
    })
  })

  // 添加内容容器的事件处理程序以保持内容显示
  infoContainers.forEach((container) => {
    container.addEventListener('mouseenter', () => {
      // 鼠标进入内容容器时保持内容显示
      clearTimeout(hoverTimeout) // 清除延迟隐藏
    })

    container.addEventListener('mouseleave', () => {
      // 鼠标离开内容容器时隐藏内容
      container.classList.remove('active')
    })
  })

  // 点击回到顶部图标时回到页面顶部
  backToTopIcon.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
})
