import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const FlagChinaSimplifiedIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fill='#F1361D'
      d='M22 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z'
    />
    <path
      fill='#fff'
      d='M7.742 7.186h1.04V13h-1.04V7.186Zm7.453 5.77h-.953l-.254-.927.997.033c.243 0 .365-.162.365-.475V6.883H11.24v-.938h5.15v5.922c0 .723-.399 1.09-1.196 1.09ZM9.968 7.64h4.175v4.207H9.968V7.639Zm3.2 3.354v-.863h-2.203v.863h2.203Zm-2.203-1.682h2.203v-.842h-2.203v.842ZM9.082 5.503c.576.496 1.019.938 1.329 1.327l-.775.517c-.333-.41-.776-.863-1.33-1.38l.776-.464Zm-.3-.874a7.406 7.406 0 0 1-.896 1.23L7 5.298C7.664 4.586 8.13 3.82 8.418 3l1.018.216c-.066.183-.144.356-.21.518h2.746v.895h-1.461c.232.324.42.636.564.917l-.93.334a9.517 9.517 0 0 0-.73-1.251h-.632Zm4.707 0c-.199.388-.431.744-.686 1.068l-.886-.561c.543-.658.93-1.37 1.152-2.125l1.007.216c-.066.172-.121.345-.177.507H17v.895h-1.661c.21.291.387.572.531.83l-.93.335c-.2-.4-.432-.788-.697-1.165h-.754Z'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1ZM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagChinaSimplifiedIcon);
export default ForwardRef;
