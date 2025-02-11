import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketSoftCommodityCocoaIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#90512B'
      d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
    />
    <path
      fill='#fff'
      d='M12.726 16.647c0-1.73.335-3.513.996-5.298q.1-.27.2-.512-.307.286-.625.62c-.715.754-1.286 1.524-1.697 2.289-.527.98-.794 1.956-.794 2.901 0 .946.267 1.922.794 2.902.411.765.982 1.535 1.697 2.289q.316.333.625.62a17 17 0 0 1-.2-.512c-.66-1.785-.996-3.568-.996-5.299'
    />
    <path
      fill='#fff'
      d='M18.333 16.412a7.4 7.4 0 0 1-1.336-1.052c-.818-.818-1.451-1.862-1.883-3.104a10 10 0 0 1-.312-1.094c-.534 1.303-1.138 3.267-1.138 5.485 0 3.888 1.856 6.997 1.935 7.127a.47.47 0 0 0 .802 0c.079-.13 1.935-3.239 1.935-7.127q0-.117-.003-.235M19.27 16.911c-.032 1.648-.366 3.34-.993 5.034q-.1.27-.2.513.308-.287.626-.62c.714-.754 1.285-1.524 1.697-2.29a6.6 6.6 0 0 0 .717-2.011 9.758 9.758 0 0 1-1.846-.626M23.06 16.328c-.007-.12-.203-2.98-2.127-4.905-1.5-1.5-3.568-1.95-4.465-2.078v-.876a.469.469 0 0 0-.937 0v1.323A8.8 8.8 0 0 0 16 11.948c.31.891.82 1.909 1.66 2.749 1.924 1.924 4.783 2.12 4.904 2.128h.029a.47.47 0 0 0 .468-.497'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketSoftCommodityCocoaIcon);
export default ForwardRef;
