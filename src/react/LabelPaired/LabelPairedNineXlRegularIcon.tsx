import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedNineXlRegularIcon = (
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
      <path d='M1.5 15q.047 2.532 1.734 4.266Q4.97 20.954 7.5 21q2.532-.047 4.219-1.687 1.64-1.688 1.781-4.172V15q-.047-2.531-1.734-4.266Q10.03 9.047 7.5 9q-2.531.047-4.266 1.734Q1.547 12.47 1.5 15m7.547 7.36q-.75.14-1.547.14-3.187-.094-5.297-2.203T0 15q.094-3.187 2.203-5.297T7.5 7.5q3.187.094 5.297 2.203T15 15v.281q-.14 2.72-1.922 4.828l-7.265 8.157q-.516.468-1.079.047-.469-.516-.046-1.079z' />
    </g>
    <defs>
      <clipPath id='43d99842de3c6b7b6650e293ddbe5f8c__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedNineXlRegularIcon);
export default ForwardRef;
