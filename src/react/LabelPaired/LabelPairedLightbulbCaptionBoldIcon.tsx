import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightbulbCaptionBoldIcon = (
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
      <path d='M6.96 9.336q.517-.75.54-1.711-.024-1.266-.867-2.133-.868-.843-2.133-.867-1.266.024-2.133.867-.843.868-.867 2.133.023.96.54 1.71.116.189.304.423.492.633.914 1.383.351.68.445 1.359H2.555a2.7 2.7 0 0 0-.282-.82 11 11 0 0 0-.796-1.196l-.375-.515Q.398 8.96.375 7.625q.047-1.758 1.219-2.906Q2.742 3.546 4.5 3.5q1.758.047 2.906 1.219Q8.58 5.867 8.625 7.625q-.024 1.336-.727 2.344-.188.258-.375.492v.023q-.445.587-.796 1.196-.212.398-.282.82H5.297q.093-.68.445-1.36.446-.75.938-1.382.165-.234.28-.422M4.5 6.5a1.22 1.22 0 0 0-.797.328 1.22 1.22 0 0 0-.328.797Q3.352 7.977 3 8q-.352-.023-.375-.375.023-.797.54-1.336.538-.515 1.335-.539.352.023.375.375-.023.352-.375.375m0 9q-.797-.023-1.336-.54-.515-.538-.539-1.335v-.375h3.75v.375q-.023.797-.54 1.336-.538.515-1.335.539' />
    </g>
    <defs>
      <clipPath id='57d163595e38d9dd309e4d521dc85251__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightbulbCaptionBoldIcon);
export default ForwardRef;
