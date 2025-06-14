import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const CurrencyUsdkIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#5306687e60f951bf1fc3f6a9a8e8bcbf__a)'>
      <path
        fill='#0D74F6'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        d='M13.153 7.184c-1.2-.001-2.4-.002-3.601.006-.035 1.621-.03 3.243-.023 4.866.005 1.4.01 2.801-.011 4.201-1.913.375-3.871.32-5.799.118.848.49 1.81.729 2.756.963l.244.06c3.961.874 8.24.199 11.74-1.85 3.21-1.871 5.814-4.846 7.08-8.351C24 7.18 22.46 7.182 20.92 7.185q-1.237.002-2.473 0c.199.386.42.759.642 1.131.244.411.488.822.702 1.25-.038.182-.153.328-.268.473a3 3 0 0 0-.132.175c-1.156 1.448-2.522 2.755-4.116 3.714-.015-.915-.01-1.83-.003-2.745.008-1.333.017-2.667-.04-4q-1.038.002-2.079 0'
      />
      <path
        fill='#fff'
        d='M19.86 15.957c-.713.442-1.426.886-2.193 1.23-2.524 1.213-5.338 1.72-8.128 1.684-.015 1.984-.025 3.97.005 5.953 1.368.013 2.736.01 4.104.008l1.602-.001c.034-.989.028-1.978.022-2.968-.004-.7-.008-1.402.002-2.103a13 13 0 0 1 1.554-.507c.489.846.945 1.712 1.402 2.577.533 1.01 1.066 2.02 1.65 3q.867 0 1.733.003c1.312.002 2.623.005 3.934-.012-1.415-2.57-2.882-5.114-4.348-7.656l-.866-1.501q-.237.145-.474.293'
      />
    </g>
    <defs>
      <clipPath id='5306687e60f951bf1fc3f6a9a8e8bcbf__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(CurrencyUsdkIcon);
export default ForwardRef;
