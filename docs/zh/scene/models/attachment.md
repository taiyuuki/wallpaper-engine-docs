# Model Attachments

Wallpaper Engine allows you to create model attachment points that you can use to attach other assets to specific bones of your model. Attachments will follow your model along any animations or movements.

## Creating an Attachment Point

In our example, we will attach a light to the front of our model. To achieve this, first click on **Configure Model** to open the model editor. Navigate to the **Attachments** tab at the top and click on **Add attachment**. You can now either select the bone you want to create an attachment point for through the dropdown list or select it in the model preview on the right-hand side. We recommend giving your attachment a fitting name so that you can easily recognize it later.

In our case, we further adjust the origin of the attachment point, as the point is placed inside of the model instead of the outside where we want it for our purposes. This can be done by adjusting the **Origin** in the attachment point settings. **Tip:** Use the mouse wheel to quickly move the origin point on the currently selected axis.

## Attaching an Asset

Once you have created the attachment point, navigate back to your asset list and drag the asset that you want to attach onto your model and swerve to the right. It should now be located in the hierarchy of your model asset. Now, right-click on the attached asset, hover over **Hierarchy**, followed by **Set Parent Attachment**, then select the attachment you just created from the list. The attached asset now jumps to the attachment point and will follow the model along all of its animations.

See the entire process in the following video:

<video width="100%" controls loop>
  <source :src="$withBase('/videos/model_attachment.mp4')" type="video/mp4">
  Your browser does not support the video tag.
</video>