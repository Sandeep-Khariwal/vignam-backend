import { Request, Response } from 'express';
import Content from '../modals/content'; // Adjust the path as needed

// Create a new content document
export const createContent = async (req: Request, res: Response): Promise<void> => {
  try {
    const { textContent } = req.body;

    let textArray = await Content.findOne();

    if (!textArray) {
      const newContent = new Content({ textContent: [textContent] });
      const data = await newContent.save();
      res.status(201).json({success:true,message:"Text Added",textArray:data});
    } else {
      textArray.textContent.push(textContent);
      const data = await textArray.save();
      res.status(200).json({success:true,message:"Text Added",textArray:data});
    }
  } catch (error) {
    res.status(500).json({success:false, message: 'Error creating content', error });
  }
};

// Get all content documents
export const getAllContent = async (req: Request, res: Response): Promise<void> => {
  try {
    const contents = await Content.findOne();
    res.status(200).json({success:true,textArray:contents});
  } catch (error) {
    res.status(500).json({success:false, message: 'Error retrieving contents', error });
  }
};





