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
            cv::Mat scores outs[1].row()).collange(5, outs[1].cols);
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
}
