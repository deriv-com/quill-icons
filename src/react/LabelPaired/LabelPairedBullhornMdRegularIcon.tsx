import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBullhornMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13 5.375q0-.156-.156-.219-.156-.061-.281.063l-.75.781A9.5 9.5 0 0 1 7 8.75v5.531A9.3 9.3 0 0 1 11.813 17l.75.781q.125.125.28.063.157-.063.157-.219zm-7 8.719V8.906q-.281.031-.531.031L4.53 9H2a.97.97 0 0 0-.719.281A.97.97 0 0 0 1 10v3q0 .438.281.719A.97.97 0 0 0 2 14h2.531l.907.063q.281 0 .562.03m5.844-9.563q.656-.594 1.375-.312T14 5.375v12.25q-.063.875-.781 1.156-.72.282-1.375-.312l-.75-.782Q9 15.5 6 15.095v3.156q-.03.75-.5 1.25-.5.47-1.25.5h-.5q-.75-.03-1.25-.5-.469-.5-.5-1.25V15q-.843-.03-1.406-.594Q.032 13.843 0 13v-3q.03-.843.594-1.406Q1.157 8.032 2 8h2.5l.906-.062a8.8 8.8 0 0 0 3.094-.75 8.5 8.5 0 0 0 2.594-1.875zM3 15v3.25q.063.687.75.75h.5q.687-.063.75-.75v-3.219L4.5 15zm12.5-5q.47.031.5.5v2q-.03.47-.5.5-.469-.03-.5-.5v-2q.031-.469.5-.5' />
    </g>
    <defs>
      <clipPath id='c77bfe53a0da0ab7__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBullhornMdRegularIcon);
export default ForwardRef;
