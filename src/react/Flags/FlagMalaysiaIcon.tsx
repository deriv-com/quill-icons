import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const FlagMalaysiaIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fill='#E1244A'
      d='M13 0v1.143h10.808A2 2 0 0 0 22 0h-9ZM24 2.286H13v1.143h11V2.286ZM24 4.571H13v1.143h11V4.571ZM24 6.857H13V8h11V6.857ZM24 9.143H0v1.143h24V9.143ZM24 11.429H0v1.142h24V11.43ZM24 13.714H0V14c0 .307.07.597.192.857h23.616c.123-.26.192-.55.192-.857v-.286Z'
    />
    <path
      fill='#0C3F8E'
      fillRule='evenodd'
      d='M2 0h11v9.145H0V2a2 2 0 0 1 2-2Zm5.856 1.894a3.429 3.429 0 1 0 0 5.356 2.857 2.857 0 1 1 0-5.356ZM9.183 3.72 9 2.5l-.183 1.22-.708-1.022.38 1.177-1.092-.622.865.9L7 4.055l1.18.445L7 4.945l1.262-.098-.865.9 1.092-.622-.38 1.177.708-1.022L9 6.5l.183-1.22.708 1.022-.38-1.177 1.093.622-.865-.9L11 4.945 9.82 4.5 11 4.055l-1.261.098.864-.9-1.092.622.38-1.177-.708 1.022Z'
      clipRule='evenodd'
    />
    <path
      fill='#FFD34F'
      fillRule='evenodd'
      d='M5.714 1.143c.81 0 1.555.28 2.142.75a2.857 2.857 0 1 0 0 5.356 3.429 3.429 0 1 1-2.14-6.107ZM9 2.5l.183 1.22.708-1.022-.38 1.177 1.093-.622-.865.9L11 4.055 9.82 4.5l1.18.445-1.261-.098.864.9-1.092-.622.38 1.177-.708-1.022L9 6.5l-.183-1.22-.708 1.022.38-1.177-1.092.622.865-.9L7 4.945 8.18 4.5 7 4.055l1.262.098-.865-.9 1.092.622-.38-1.177.708 1.022L9 2.5Z'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      d='M23.808 1.143H13v1.143h11V2a1.99 1.99 0 0 0-.192-.857ZM13 3.429V4.57h11V3.43H13ZM13 5.714v1.143h11V5.714H13ZM13 8v1.143h11V8H13ZM0 11.429v-1.143h24v1.143H0ZM0 12.571h24v1.143H0v-1.143ZM22 16a2 2 0 0 0 1.808-1.144v.001H.192A2 2 0 0 0 2 16h20Z'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1ZM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagMalaysiaIcon);
export default ForwardRef;
