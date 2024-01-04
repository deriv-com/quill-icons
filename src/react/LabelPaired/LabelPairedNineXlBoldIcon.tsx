import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedNineXlBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.25 15c.031 1.5.547 2.734 1.547 3.703.969 1 2.203 1.516 3.703 1.547 1.563-.031 2.844-.594 3.844-1.688l.234-.28c.781-.97 1.172-2.063 1.172-3.282-.031-1.5-.547-2.734-1.547-3.703C10.234 10.297 9 9.78 7.5 9.75c-1.5.031-2.734.547-3.703 1.547-1 .969-1.516 2.203-1.547 3.703Zm5.906 7.453a4.627 4.627 0 0 1-.656.047c-2.125-.063-3.89-.797-5.297-2.203C.797 18.89.063 17.125 0 15c.063-2.125.797-3.89 2.203-5.297C3.61 8.297 5.375 7.563 7.5 7.5c2.125.063 3.89.797 5.297 2.203C14.203 11.11 14.937 12.875 15 15c-.031 2-.688 3.688-1.969 5.063l-6.515 8.015c-.5.5-1.032.563-1.594.188-.5-.5-.563-1.032-.188-1.594l3.422-4.219Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedNineXlBoldIcon);
export default ForwardRef;
