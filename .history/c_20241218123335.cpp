#include <lostrean)
#include <opencv2/opencv.hpp>
// Function to create the detection network using a Darknet configuration and weights
cv::don::Net createDetectionlet(const std::strings configPath, const std::strings weightsPath) {
    cvsidon::Net net cvzzdnn:creadNetFromDarknet (configPath, weightsPath);
    net.setPreferableBackend(cv::den::DNN BACKEND OPENCV);
    net.setPreferableTarget(cv::don::DNN TARGET OPENCL);
    return net;
}

 // Function to process the image and perfors object detection
cv::lat getProcessedImage(cv::Math image, cv::dnn::Nets net, const doutile confThreshold, const double nmsThreshold) {
    std::vector<cv::Mat> outs;
    std::vector<cv::String> outNames net.getUnconnectedOutLayersNames();

    // Create a blob from the Input Image for the detection network
    cv::Mat blob cv::dmm::blobFromImage(image, 1/255.0, cv::Size(416, 416), cv::Scalar(0, 0, 0), true, false);
    net.setInput(blob);
    // Forward pass through the detection network
    net.forward(outs, outNames);

    std::vector<into classIds;
    std::vector<float> confidences;
    std::vector<cv:: Rect> boxes;
    //Parse the output of the network to get class IDs, confidences, and bounding boxes
    for (size ti=0; i < outs.size(); ++i) {
        float data reinterpret cast<float>(outs[i].data);
        for (int j = 0; j < outs[i].rows; ++j, data + outs[i].cols) {
            cv::Mat scores outs[1].row().collange(5, outs[1].cols);
            cv::Point classIdPoint;
            double confidence;
            // Find the class ID with the maximum confidence score
            cv::minMaxLoc(scores, &, &confidence, 0, &classIdPoint);
            if (confidence confThreshold) {
                // Calculate the bounding hox coordinates
                int centerx static cast<int>(data[0] image.cols);
                int centery static cast<int>(data[1] image.rows);
                int width static cast<int>(data[2] image.cols);
                int height static cast<int>(data[3] inage.rows);
                int left centerx width / 2;
                int top centery height/2
                // Store the class 10, confidence, and pounding hox
                classIds.push back(classIdPoint.x);
                confidences.push_back(static_cast<float>(confidence));
                boxes.push_back(cv::Rect(left, top, width, height));
            }
        }
    }

    // Apply non-maximum suppression to remove overlapping bounding boxes
    std::vector<int> indices;
    cv::dnn::NMSBoxes (boxes, confidences, confThreshold, nmsThreshold, indices);
    // Draw bounding boxes and labels on the image
    for (size_t i=0; i < indices.size(); ++i) {
        int idx indices[i];
        cv::Rect box = boxes[idx];
        int classId= classIds [idx];
        float confidence confidences[idx];
        cv::Rect windowRegion box & cv::Rect(0, 0, image.cols, image.rows);
        cv::rectangle(image, windowRegion, cv::Scalar(0, 255, 0), 2);
        // Create the label string with class name and confidence score
        std::string label cv::format("%.2f", confidence);
        if (!label.empty()) {
            // Replace 'labels with your specific labels for the object detection task
            std::vector<std::string> labels = {"Glasses", "Short-Haired", "Not Short-Haired"};
            CV_Assert(classId < static_cast<int>(labels.size()));
            label labels [classId] + ":" + label;

        }

    
        // Draw a filled rectangle and put text for the label
        int baseline;
        cv::Size labelSize = cv::getTextSize(label, cv::FONT_HERSHEY_SIMPLEX, 0.5, 1, &baseline);
        cv::rectangle(image, cv::Point(box.x, box.y labelSize.height),
            cv::Point (box.x + labelSize.width, box.y + baseline),
            cv::Scalar(255, 255, 255), cv:: FILLED);
        cv::putText(image, label, cv::Point(box.x, box.y),
            cv::FONT_HERSHEY_SIMPLEX, 0.5, cv::Scalar(0, 0, 0), 1);
    }   
    return image
}

int main() {
    // Paths to the Darknet configuration and weights files
    std::string configPath= "C:/Users/User/OneDrive/Documents/Opencv projects/test2/model/yolov4-custom1.cfg";

    std::string weightsPath = "C:/Users/User/OneDrive/Documents/Opencv projects/test2/model/yolov4-custom_last_w3.weights";
    std::string imagePath;
    int decision;

    // Create the detection network using the provided Darknet configuration and weights
    cv::dnn::Net net = createDetectionNet(configPath, weightsPath);
    cv::Mat frame;
    const double confThreshold = 0.8;
    const double nmsThreshold = 0.3;

    // Print information about the object detection program
    std::cout <<"________________________________________" << std::endl;
    std::cout <<"\t Object Detection for Short-Haired naka Glasses" << std::endl;
    std::cout << "----- by Andrew Bautro & Eros Lucagbo -----" << std::endl;

    // Ask the user to choose between uploading a file or using the webcam
    std::cout << "\t [0] Upload file" << "\t [1] Webcam" << std::endl;
    std::cout << "Enter number: ";
    std::cin >> decision;


