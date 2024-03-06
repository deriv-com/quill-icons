import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromBracketLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m9.664 5.773 5 5q.548.664 0 1.329-.664.546-1.328 0L9.937 8.703v9.61q-.078.858-.937.937-.86-.078-.937-.937v-9.61l-3.399 3.399q-.664.546-1.328 0-.547-.664 0-1.329l5-5q.664-.546 1.328 0M2.125 18.938v3.125q0 .663.469 1.093.428.47 1.094.469h10.625q.663 0 1.093-.469.47-.429.469-1.093v-3.125q.078-.86.938-.938.858.078.937.938v3.125q-.04 1.445-1.016 2.421-.976.977-2.422 1.016H3.688q-1.446-.04-2.422-1.016Q.289 23.51.25 22.062v-3.125q.078-.858.938-.937.858.078.937.938' />
    </g>
    <defs>
      <clipPath id='692c1200eaeb55529ff07e21515b7898__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromBracketLgBoldIcon);
export default ForwardRef;
