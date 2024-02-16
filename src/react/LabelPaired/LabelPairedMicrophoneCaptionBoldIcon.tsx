import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMicrophoneCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.625 5.75a1.22 1.22 0 0 0-.328-.797 1.22 1.22 0 0 0-.797-.328 1.22 1.22 0 0 0-.797.328 1.22 1.22 0 0 0-.328.797V9.5q.024.469.328.797.329.304.797.328.469-.024.797-.328.304-.329.328-.797zm-3.375 0q.023-.96.656-1.594Q3.54 3.524 4.5 3.5q.96.024 1.594.656.632.633.656 1.594V9.5q-.024.96-.656 1.594-.633.633-1.594.656-.96-.024-1.594-.656-.632-.633-.656-1.594zM1.5 8.563V9.5q.024 1.266.867 2.133.868.843 2.133.867 1.266-.024 2.133-.867.843-.868.867-2.133v-.937q.047-.516.563-.563.514.047.562.563V9.5q-.024 1.594-1.031 2.719-.985 1.125-2.532 1.36v.796h1.125q.516.047.563.563-.047.514-.562.562H2.813q-.516-.047-.563-.562.047-.516.563-.563h1.124v-.797q-1.545-.235-2.53-1.36Q.397 11.095.374 9.5v-.937Q.422 8.047.938 8q.514.047.562.563' />
    </g>
    <defs>
      <clipPath id='610ed5199f7304fe5ac36da9e8ad661f__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMicrophoneCaptionBoldIcon);
export default ForwardRef;
