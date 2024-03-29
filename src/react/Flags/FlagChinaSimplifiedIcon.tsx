import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagChinaSimplifiedIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#F1361D'
      d='M22 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2'
    />
    <path
      fill='#fff'
      d='M7.742 7.186h1.04V13h-1.04zm7.453 5.77h-.953l-.254-.927.997.033c.243 0 .365-.162.365-.475V6.884H11.24v-.939h5.15v5.922c0 .723-.399 1.09-1.196 1.09M9.968 7.64h4.175v4.207H9.968zm3.2 3.354v-.863h-2.203v.863zm-2.203-1.682h2.203v-.842h-2.203zM9.082 5.503q.864.744 1.329 1.327l-.775.517c-.333-.41-.776-.863-1.33-1.38zm-.3-.874a7.4 7.4 0 0 1-.896 1.23L7 5.298C7.664 4.586 8.13 3.82 8.418 3l1.018.216c-.066.183-.144.356-.21.518h2.746v.895h-1.461c.232.324.42.636.564.917l-.93.334a9.5 9.5 0 0 0-.73-1.251zm4.708 0c-.2.388-.432.744-.687 1.068l-.886-.561c.543-.658.93-1.37 1.152-2.125l1.007.216c-.066.172-.121.345-.177.507H17v.895h-1.661c.21.291.387.572.531.83l-.93.335q-.3-.6-.697-1.165z'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagChinaSimplifiedIcon);
export default ForwardRef;
