# People Detector Backend
Source code leeched from [this](https://www.pyimagesearch.com/2018/08/13/opencv-people-counter/) OpenCV tutorial.
Project planned on [this Google Doc](https://docs.google.com/document/d/1QFvyTcN5wA5pJ-S6BqXIjYd8eC87hOfNvDYKG-PZnrk/edit?usp=sharing)

Prerequisites:
1. Make sure you have [Python 3](https://www.python.org/downloads/windows/) installed with `python -V`
2. Make sure you install all the imports specified in all `.py` files
3. *Extras:* Need to install [dlib](http://dlib.net/)
4. Dlib requires [CMake](https://cmake.org/download/). You can check proper installation using `cmake --version`
 
 Or run `pip install -r requirements.txt`
 
 What to enter into CLI:

If on the damn Raspberry Pi, run `LD_PRELOAD=/usr/lib/arm-linux-gnueabihf/libatomic.so.1.2.0 python3 people_counter.py --prototxt mobilenet_ssd/MobileNetSSD_deploy.prototxt --model mobilenet_ssd/MobileNetSSD_deploy.caffemodel`

Else, if on your local machine:  `python people_counter.py --prototxt mobilenet_ssd/MobileNetSSD_deploy.prototxt --model mobilenet_ssd/MobileNetSSD_deploy.caffemodel`
