import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToBracketLgBoldIcon = (
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
      <path d='m14.664 13.977-5 5q-.664.546-1.328 0l-5-5q-.547-.664 0-1.329.664-.546 1.328 0l3.399 3.399v-9.61Q8.14 5.579 9 5.5q.859.078.938.938v9.609l3.398-3.399q.664-.546 1.328 0 .548.664 0 1.329m-12.539 4.96v3.125q0 .665.469 1.094.428.47 1.094.469h10.625q.663 0 1.093-.469.47-.429.469-1.093v-3.125q.078-.86.938-.938.858.078.937.938v3.125q-.04 1.445-1.016 2.421-.976.977-2.422 1.016H3.688q-1.446-.04-2.422-1.016Q.289 23.51.25 22.062v-3.125q.078-.858.938-.937.858.078.937.938' />
    </g>
    <defs>
      <clipPath id='ecb10ce44f083b6e7078784b4c082fc5__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToBracketLgBoldIcon);
export default ForwardRef;
