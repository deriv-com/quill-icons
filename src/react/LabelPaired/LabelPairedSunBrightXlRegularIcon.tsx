import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSunBrightXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12 6q.703.046.75.75v3.75q-.047.703-.75.75-.703-.047-.75-.75V6.75q.047-.703.75-.75M0 18q.047-.704.75-.75H4.5q.704.046.75.75-.046.704-.75.75H.75Q.047 18.704 0 18m18.75 0q.046-.704.75-.75h3.75q.704.046.75.75-.046.704-.75.75H19.5q-.704-.046-.75-.75M12 24.75q.703.046.75.75v3.75q-.047.704-.75.75-.703-.046-.75-.75V25.5q.047-.704.75-.75M3.516 9.516q.515-.423 1.078 0l2.625 2.672q.422.515 0 1.03-.516.47-1.032 0l-2.671-2.624q-.423-.563 0-1.078m0 16.968q-.423-.515 0-1.078l2.672-2.625q.515-.422 1.03 0 .47.516 0 1.032l-2.624 2.671q-.563.423-1.078 0M16.78 13.22q-.421-.516 0-1.031l2.625-2.672q.563-.423 1.078 0 .423.515 0 1.078l-2.672 2.625q-.515.422-1.03 0m0 9.562q.516-.422 1.032 0l2.671 2.625q.423.563 0 1.078-.515.423-1.078 0l-2.625-2.672q-.421-.515 0-1.03M15.75 18q-.047-2.109-1.875-3.234-1.875-1.032-3.75 0Q8.297 15.89 8.25 18q.047 2.109 1.875 3.234 1.875 1.032 3.75 0Q15.703 20.11 15.75 18m-9 0q0-1.406.703-2.625a5.16 5.16 0 0 1 1.922-1.922A5.17 5.17 0 0 1 12 12.75q1.407 0 2.625.703a5.16 5.16 0 0 1 1.922 1.922q.703 1.22.703 2.625 0 1.407-.703 2.625a5.16 5.16 0 0 1-1.922 1.922A5.17 5.17 0 0 1 12 23.25a5.17 5.17 0 0 1-2.625-.703 5.16 5.16 0 0 1-1.922-1.922A5.17 5.17 0 0 1 6.75 18' />
    </g>
    <defs>
      <clipPath id='a386e174b34a091584cf7b58c92d134f__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSunBrightXlRegularIcon);
export default ForwardRef;
