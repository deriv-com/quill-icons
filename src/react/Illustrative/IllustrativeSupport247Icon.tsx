import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const IllustrativeSupport247Icon = (
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
    <g fillRule='evenodd' clipRule='evenodd'>
      <path d='M23.333 14.307c0-.369.299-.667.667-.667h2.667A3.333 3.333 0 0 1 30 16.973v6a3.333 3.333 0 0 1-3.333 3.334V28a.667.667 0 0 1-1.138.471l-2.165-2.164h-8.03A3.333 3.333 0 0 1 12 22.973v-2.666a.667.667 0 0 1 1.333 0v2.666a2 2 0 0 0 2 2h8.307c.177 0 .346.07.471.196l1.222 1.221v-.75c0-.368.299-.667.667-.667h.667a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H24a.667.667 0 0 1-.667-.666' />
      <path d='M5.333 6.973a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2H6c.368 0 .667.299.667.667v.75l1.222-1.221a.67.67 0 0 1 .471-.196h8.307a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zM2 8.973A3.333 3.333 0 0 1 5.333 5.64h11.334A3.333 3.333 0 0 1 20 8.973v6a3.333 3.333 0 0 1-3.333 3.334h-8.03L6.47 20.47A.667.667 0 0 1 5.333 20v-1.693A3.333 3.333 0 0 1 2 14.973z' />
      <path d='M6 10.307c0-.369.298-.667.667-.667h8a.667.667 0 0 1 0 1.333h-8A.667.667 0 0 1 6 10.307M6 13.64c0-.368.298-.667.667-.667h4.666a.667.667 0 0 1 0 1.334H6.667A.667.667 0 0 1 6 13.64M28.653 5.2a.667.667 0 0 1-.52.787 122 122 0 0 1-1.29.257l-.043.132v.001q-.083.25-.169.504a.667.667 0 1 1-1.262-.429q.083-.244.164-.494v-.001q.083-.25.169-.505a.67.67 0 0 1 .497-.438l.837-.168q.419-.082.83-.166a.667.667 0 0 1 .787.52' />
      <path d='M26.333 2.667a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-4.333 3a4.333 4.333 0 1 1 8.667 0 4.333 4.333 0 0 1-8.667 0' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeSupport247Icon);
export default ForwardRef;
