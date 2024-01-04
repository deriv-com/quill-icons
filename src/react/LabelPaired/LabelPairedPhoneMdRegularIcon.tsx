import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPhoneMdRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m11.75 12.594 3.5 1.5c.27.125.48.323.625.594.125.25.156.52.094.812l-.75 3.5c-.167.625-.573.958-1.219 1h-.563a3.095 3.095 0 0 0-.437-.031c-2.438-.209-4.635-.948-6.594-2.219a14.01 14.01 0 0 1-4.656-4.969C.604 10.761.02 8.5 0 6c.042-.646.375-1.052 1-1.219l3.5-.75c.292-.062.563-.02.813.125.27.125.468.323.593.594l1.5 3.5c.209.563.084 1.052-.375 1.469l-1.25 1.031a9.55 9.55 0 0 0 3.469 3.469l1.031-1.25c.417-.459.906-.584 1.469-.375ZM14 19c.125 0 .208-.063.25-.188l.75-3.5c.02-.145-.031-.24-.156-.28l-3.5-1.5c-.104-.042-.198-.022-.281.062l-1.032 1.281c-.375.375-.802.448-1.281.219a10.314 10.314 0 0 1-3.844-3.844c-.229-.48-.156-.906.219-1.281l1.281-1.031c.084-.084.104-.178.063-.282l-1.5-3.5c-.063-.125-.157-.177-.282-.156l-3.5.75C1.063 5.792 1 5.875 1 6c.02 2.417.615 4.604 1.781 6.563a12.795 12.795 0 0 0 4.656 4.656C9.396 18.385 11.584 18.979 14 19Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPhoneMdRegularIcon);
export default ForwardRef;
