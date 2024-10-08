import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagAlgeriaIcon = (
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
      fill='#048345'
      d='M0 1.994C0 .893.902 0 2.009 0H12v4.004L11.834 4C9.717 4 8 5.79 8 8s1.717 4 3.834 4q.083 0 .166-.004V16H2.009A2 2 0 0 1 0 14.006z'
    />
    <path
      fill='#048345'
      d='M12 11.168V4.832C10.5 5.198 9.394 6.478 9.394 8s1.107 2.802 2.606 3.168'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M21.992 16H12v-4.004a3.74 3.74 0 0 0 2.453-1.075 3.706 3.706 0 0 1-2.453.247V4.832a3.7 3.7 0 0 1 2.453.247A3.74 3.74 0 0 0 12 4.004V0h9.991C23.098 0 24 .893 24 1.994v12.012c0 1.1-.9 1.994-2.009 1.994m-9.988-6.94 1.225-.382.761 1.033.014-1.284 1.218-.405-1.216-.41-.01-1.283-.765 1.03-1.223-.388.743 1.046z'
      clipRule='evenodd'
    />
    <path
      fill='#D21034'
      fillRule='evenodd'
      d='m13.229 8.678-1.225.383.747-1.044-.743-1.046 1.223.388.766-1.03.009 1.283 1.216.41-1.218.405-.014 1.284z'
      clipRule='evenodd'
    />
    <path
      fill='#D21034'
      d='M14.453 10.92a3.74 3.74 0 0 1-2.62 1.08C9.718 12 8 10.21 8 8s1.717-4 3.834-4c1.013 0 1.934.41 2.62 1.08a3.66 3.66 0 0 0-1.574-.353c-1.925 0-3.486 1.466-3.486 3.273s1.56 3.273 3.486 3.273c.566 0 1.1-.127 1.573-.352'
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
const ForwardRef = forwardRef(FlagAlgeriaIcon);
export default ForwardRef;
