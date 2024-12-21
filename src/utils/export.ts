import { toPng } from 'html-to-image';

export const exportToImage = async (element: HTMLElement, fileName: string = 'business-card'): Promise<void> => {
  try {
    const dataUrl = await toPng(element, {
      quality: 0.95,
      pixelRatio: 2
    });
    
    // Create download link
    const link = document.createElement('a');
    link.download = `${fileName}.png`;
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error('Error exporting image:', error);
    throw error;
  }
};