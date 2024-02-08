import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDollarSignMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.5 4.5v1.531q1.53.156 2.625.438.438.156.375.625-.156.437-.625.343-.78-.188-1.812-.343A9.8 9.8 0 0 0 4 7q-1 .095-1.656.5-.594.375-.813 1.25-.093.688.094 1.063.219.375.688.718 1.093.594 2.812.969l.063.031q.812.188 1.593.438.813.28 1.438.656.687.406 1.062 1.125.344.72.156 1.688-.374 1.593-1.937 2.187a6.7 6.7 0 0 1-2 .344V19.5q-.03.47-.5.5-.437-.03-.5-.5v-1.562q-.28 0-.594-.063a15 15 0 0 1-1.469-.312 10 10 0 0 1-1.624-.532q-.406-.218-.282-.656.25-.406.657-.281.75.312 1.5.531.78.188 1.374.281 1.844.25 3.063-.218 1.156-.47 1.344-1.438.093-.687-.094-1.062-.187-.406-.687-.72-1.094-.592-2.813-1h-.062A17 17 0 0 1 3.218 12a6.5 6.5 0 0 1-1.438-.656A2.6 2.6 0 0 1 .75 10.25Q.375 9.5.563 8.563q.28-1.313 1.25-1.907A4.76 4.76 0 0 1 3.906 6H4.5V4.5q.031-.469.5-.5.47.031.5.5' />
    </g>
    <defs>
      <clipPath id='fa1439ec69b04de6f6bc83401e5bc0df__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDollarSignMdRegularIcon);
export default ForwardRef;
