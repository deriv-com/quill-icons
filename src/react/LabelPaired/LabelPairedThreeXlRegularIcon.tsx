import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThreeXlRegularIcon = (
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
      <path d='M0 8.25c0-.375.328-.75.75-.75H13.5a.69.69 0 0 1 .656.516.65.65 0 0 1-.187.797L5.625 16.5H9c3.281 0 6 2.719 6 6 0 3.328-2.719 6-6 6H4.172C2.484 28.5.89 27.563.14 26.016l-.094-.141a.77.77 0 0 1 .328-1.031.77.77 0 0 1 1.031.328l.094.187A2.96 2.96 0 0 0 4.172 27H9a4.501 4.501 0 0 0 0-9H3.75c-.328 0-.61-.187-.703-.469a.65.65 0 0 1 .187-.797L11.578 9H.75A.74.74 0 0 1 0 8.25' />
    </g>
    <defs>
      <clipPath id='a1f49dced21b6881d6ab52e85f4efa4d__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThreeXlRegularIcon);
export default ForwardRef;
