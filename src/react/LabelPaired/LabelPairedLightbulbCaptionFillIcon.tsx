import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightbulbCaptionFillIcon = (
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
      <path d='M6.375 12.5h-3.75a6.8 6.8 0 0 0-1.148-2.016v-.023q-.187-.234-.375-.492Q.398 8.96.375 7.625q.047-1.758 1.219-2.906Q2.742 3.546 4.5 3.5q1.758.047 2.906 1.219Q8.58 5.867 8.625 7.625q-.024 1.336-.727 2.344l-.375.515v.024q-.75.914-1.148 1.992m-1.875 3q-.797-.023-1.336-.54-.515-.538-.539-1.335v-.375h3.75v.375q-.023.797-.54 1.336-.538.515-1.335.539M2.625 7.625q.023-.797.54-1.336.538-.515 1.335-.539.352-.023.375-.375Q4.852 5.023 4.5 5q-1.125.024-1.852.773-.75.727-.773 1.852.023.352.375.375.352-.023.375-.375' />
    </g>
    <defs>
      <clipPath id='10b40f35ec425e66b0b500f57e958f17__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightbulbCaptionFillIcon);
export default ForwardRef;
