import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyIdNumberIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fillRule='evenodd' clipRule='evenodd'>
      <path d='M2.5 3A1.5 1.5 0 0 0 1 4.5v7A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 13.5 3zM0 4.5A2.5 2.5 0 0 1 2.5 2h11A2.5 2.5 0 0 1 16 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 11.5z' />
      <path d='M2.5 5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .5-.5M4.5 5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5l2.043-.001.087-.006a2.622 2.622 0 0 0 1.135-.382C8.421 10.202 9 9.41 9 8s-.579-2.201-1.235-2.612A2.6 2.6 0 0 0 6.515 5H4.5m2.002 5H5V6h1.502l.04.003q.058.003.169.026c.146.03.337.09.524.208C7.579 6.45 8 6.91 8 8s-.421 1.549-.765 1.764a1.6 1.6 0 0 1-.733.236M11.99 5.598a.5.5 0 0 0-.98-.196L10.79 6.5h-.29a.5.5 0 0 0 0 1h.09l-.2 1H10a.5.5 0 0 0 0 1h.19l-.18.902a.5.5 0 0 0 .98.196l.22-1.098h.98l-.18.902a.5.5 0 0 0 .98.196l.22-1.098h.29a.5.5 0 0 0 0-1h-.09l.2-1H14a.5.5 0 0 0 0-1h-.19l.18-.902a.5.5 0 0 0-.98-.196L12.79 6.5h-.98zM11.61 7.5h.98l-.2 1h-.98z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LegacyIdNumberIcon);
export default ForwardRef;
