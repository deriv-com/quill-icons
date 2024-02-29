import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightbulbMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.5 16h-5a9.1 9.1 0 0 0-1.531-2.687v-.032a18 18 0 0 1-.5-.656Q.532 11.281.5 9.5q.063-2.343 1.625-3.875Q3.656 4.063 6 4q2.344.063 3.875 1.625Q11.438 7.156 11.5 9.5q-.03 1.782-.969 3.125l-.5.688v.03A9.2 9.2 0 0 0 8.5 16M6 20q-1.062-.03-1.781-.719-.688-.719-.719-1.781V17h5v.5q-.03 1.062-.719 1.781Q7.062 19.97 6 20M3.5 9.5q.03-1.062.719-1.781Q4.938 7.03 6 7q.47-.03.5-.5-.03-.469-.5-.5-1.5.031-2.469 1.031Q2.531 8 2.5 9.5q.031.47.5.5.47-.03.5-.5' />
    </g>
    <defs>
      <clipPath id='da2644724b155cb77aa676bd6e6abbf2__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightbulbMdFillIcon);
export default ForwardRef;
