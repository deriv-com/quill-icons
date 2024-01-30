import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSterlingSignXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.75 13.125V18h7.5q.703.046.75.75-.047.704-.75.75h-7.5A18.35 18.35 0 0 1 1.969 27H14.25q.703.046.75.75-.047.704-.75.75H.75q-.422 0-.656-.375a.8.8 0 0 1 0-.75l.047-.094A17.46 17.46 0 0 0 2.25 19.5H.75q-.703-.046-.75-.75.047-.704.75-.75h1.5v-4.875q.047-2.391 1.64-3.984Q5.485 7.547 7.876 7.5h.328q.938 0 1.781.281l3.75 1.266q.61.281.47.937-.281.656-.938.47l-3.75-1.22A3.9 3.9 0 0 0 8.203 9h-.328q-1.734.047-2.906 1.219T3.75 13.125' />
    </g>
    <defs>
      <clipPath id='b19849c636569f1c45761bd210c26281__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSterlingSignXlRegularIcon);
export default ForwardRef;
