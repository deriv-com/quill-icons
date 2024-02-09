import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFlagCheckeredMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.75 4q.687.063.75.75v.875l2.656-.656a5.26 5.26 0 0 1 3.563.375q1.094.562 2.281.562t2.313-.562l.28-.125q.532-.25.938.031.438.25.469.813v8.75q-.031.656-.656.937l-1.063.406q-2.28.813-4.437-.25A5.7 5.7 0 0 0 4 15.5l-2.5.625v3.125q-.063.687-.75.75-.687-.063-.75-.75V4.75Q.063 4.063.75 4m.75 4.719L4 8.156V6.562l-2.5.625zm0 1.531v1.469l2.5-.563V9.72zm0 3v1.344l2.156-.563q.156-.03.344-.062v-1.25zm4 .594q1.563.03 3 .719V13.03L6.781 12.5a2.96 2.96 0 0 0-1.281-.094zM10 15a4.25 4.25 0 0 0 1.75-.25l.75-.281V13l-.812.188a5.8 5.8 0 0 1-1.688.124zm2.5-3.531V10l-.812.188a5.8 5.8 0 0 1-1.688.124v1.5q.688.062 1.375-.093zm0-3V6.906a6.5 6.5 0 0 1-2.5.5v1.407q.688.062 1.375-.094zm-4-1.25q-.75-.157-1.469-.532-.719-.344-1.531-.375v1.563a5.7 5.7 0 0 1 1.688.188l1.312.406zm0 2.812L6.781 9.5A2.95 2.95 0 0 0 5.5 9.406v1.5a5 5 0 0 1 1.688.156l1.312.407z' />
    </g>
    <defs>
      <clipPath id='dafd1d6f7e1bf04bb8643ccbc1b533f8__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFlagCheckeredMdBoldIcon);
export default ForwardRef;
