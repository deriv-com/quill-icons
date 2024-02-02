import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsSlashMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.375 16.406h-.031l.844.657q-1.188.78-2.688.906V19.5q-.03.47-.5.5-.469-.03-.5-.5v-1.531q-2.22-.219-3.75-1.719-1.5-1.53-1.719-3.75H2.5q-.469-.03-.5-.5.031-.469.5-.5h1.531q.063-.75.282-1.437l.843.656A5.3 5.3 0 0 0 5 12q.063 2.125 1.469 3.531T10 17q1.281 0 2.375-.594M9.5 6.031V4.5q.031-.469.5-.5.47.031.5.5v1.531q2.22.219 3.75 1.719 1.5 1.53 1.719 3.75H17.5q.47.031.5.5-.03.47-.5.5h-1.531q-.063.75-.281 1.438l-.844-.657Q15 12.656 15 12q-.062-2.125-1.469-3.531Q12.126 7.063 10 7q-1.28 0-2.344.594l-.843-.657Q8 6.158 9.5 6.032M10 15q-1.219-.031-2.062-.812-.844-.782-.938-2l1.75 1.374q.03 0 .031.032l1.75 1.375q-.28.03-.531.031m-.5-5.969q.25-.03.5-.031 1.219.03 2.063.813.843.78.937 2l-1.75-1.376q-.03 0-.031-.03zM.813 4.094l19 15.031q.343.312.093.688-.343.343-.718.093l-19-15q-.344-.343-.094-.718.344-.313.719-.094' />
    </g>
    <defs>
      <clipPath id='cd9a46e774236f09__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsSlashMdRegularIcon);
export default ForwardRef;
