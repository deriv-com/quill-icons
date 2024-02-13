import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHouseBlankXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.984 6.188q.516-.375 1.032 0l12.75 11.25q.468.515.047 1.078-.516.468-1.079.047L24 17.016v9.234q-.046 1.594-1.078 2.672Q21.843 29.953 20.25 30H6.75q-1.593-.046-2.672-1.078Q3.047 27.843 3 26.25v-9.234l-1.734 1.547q-.563.42-1.078-.047-.422-.563.046-1.078zM4.5 15.703V26.25q.047.937.656 1.594.657.61 1.594.656h13.5a2.45 2.45 0 0 0 1.594-.656q.61-.657.656-1.594V15.703l-9-7.969z' />
    </g>
    <defs>
      <clipPath id='1613f529047d7b183ddc1787fb02b02d__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHouseBlankXlRegularIcon);
export default ForwardRef;
