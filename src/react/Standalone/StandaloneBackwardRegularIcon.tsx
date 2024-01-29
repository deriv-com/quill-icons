import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneBackwardRegularIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M7.484 16.5 16 22.672V10.328zM16.078 9q.508 0 .82.352.352.312.352.82v4.023l6.875-4.96Q24.438 9 24.828 9q.508 0 .82.352.352.312.352.82v12.656q0 .508-.352.82-.312.352-.82.352-.39 0-.703-.234l-6.875-4.961v4.023q0 .508-.352.82-.312.352-.82.352-.39 0-.703-.234l-8.984-6.524A.86.86 0 0 1 6 16.5q0-.469.39-.742l8.985-6.524Q15.688 9 16.078 9m1.172 8.242 7.5 5.43V10.328l-7.5 5.43z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBackwardRegularIcon);
export default ForwardRef;
