import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodDiscoverBrandIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 128 80'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#231F20'
      d='M10.366 30.58H5v18.692h5.366a9.36 9.36 0 0 0 10.047-9.332c0-5.515-4.144-9.36-10.047-9.36M14.63 44.59c-1.163 1.044-2.624 1.49-4.98 1.49h-.983V33.77h.984c2.355 0 3.786.418 4.979 1.49a6.41 6.41 0 0 1 0 9.362zm7.453-14.012h3.637v18.663h-3.637zm12.521 7.185c-2.176-.805-2.832-1.342-2.832-2.385 0-1.163 1.163-2.057 2.713-2.057 1.103 0 1.998.477 2.952 1.52l1.908-2.474c-1.58-1.372-3.459-2.087-5.486-2.087-3.28 0-5.814 2.296-5.814 5.366 0 2.564 1.163 3.876 4.592 5.098 1.4.507 2.146.835 2.504 1.074a2.24 2.24 0 0 1 1.103 1.937c0 1.491-1.193 2.624-2.832 2.624-1.73 0-3.13-.894-3.965-2.504l-2.385 2.266c1.699 2.474 3.726 3.577 6.47 3.577 3.785 0 6.439-2.534 6.439-6.141 0-2.982-1.193-4.323-5.367-5.814m6.53 2.176a9.66 9.66 0 0 0 9.838 9.75c1.58 0 2.921-.299 4.561-1.104v-4.293c-1.43 1.49-2.743 2.057-4.382 2.057-3.667 0-6.261-2.683-6.261-6.44 0-3.577 2.683-6.41 6.082-6.41 1.759 0 3.07.597 4.59 2.088v-4.264a9.838 9.838 0 0 0-14.429 8.646zm43.288 3.19-4.979-12.55h-3.995l7.93 19.169h1.968l8.05-19.17H89.46zm10.643 6.142h10.316v-3.16h-6.679v-5.039h6.44v-3.19h-6.44V33.77h6.679v-3.19H95.065zm24.715-13.178c0-3.488-2.385-5.515-6.588-5.515h-5.397v18.693h3.638v-7.513h.477l5.038 7.513h4.472l-5.873-7.87c2.743-.567 4.233-2.446 4.233-5.308m-7.304 3.101h-1.043v-5.664h1.103c2.265 0 3.518.954 3.518 2.772 0 1.878-1.253 2.892-3.578 2.892'
    />
    <path
      fill='url(#fb3729a4e48f5c41fc4383c7c1e0ed23__a)'
      d='M66.653 49.928c5.483 0 9.928-4.445 9.928-9.928s-4.445-9.928-9.928-9.928-9.927 4.445-9.927 9.928 4.444 9.928 9.927 9.928'
    />
    <path
      fill='url(#fb3729a4e48f5c41fc4383c7c1e0ed23__b)'
      d='M66.653 49.928c5.483 0 9.928-4.445 9.928-9.928s-4.445-9.928-9.928-9.928-9.927 4.445-9.927 9.928 4.444 9.928 9.927 9.928'
    />
    <path
      fill='#231F20'
      d='M122.106 31.295c0-.328-.209-.507-.597-.507h-.536v1.64h.387V31.8l.448.626h.477l-.537-.685q.358-.09.358-.448m-.686.208h-.06v-.417h.06c.209 0 .298.06.298.209s-.089.208-.298.208'
    />
    <path
      fill='#231F20'
      d='M121.569 30.192a1.433 1.433 0 0 0-1.431 1.4 1.431 1.431 0 1 0 1.431-1.43zm0 2.593a1.17 1.17 0 0 1-1.056-.745 1.2 1.2 0 0 1-.077-.447c0-.626.507-1.163 1.133-1.163.596 0 1.133.537 1.133 1.192 0 .627-.507 1.163-1.133 1.163'
    />
    <defs>
      <linearGradient
        id='fb3729a4e48f5c41fc4383c7c1e0ed23__a'
        x1={94.297}
        x2={92.683}
        y1={47.93}
        y2={32.935}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#F89F21' />
        <stop offset={0.3} stopColor='#F79A23' />
        <stop offset={0.5} stopColor='#F78E22' />
        <stop offset={0.6} stopColor='#F68721' />
        <stop offset={0.7} stopColor='#F48220' />
        <stop offset={1} stopColor='#F27623' />
      </linearGradient>
      <linearGradient
        id='fb3729a4e48f5c41fc4383c7c1e0ed23__b'
        x1={87.742}
        x2={85.624}
        y1={47.781}
        y2={23.201}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#F68721' stopOpacity={0} />
        <stop offset={0.4} stopColor='#E27027' stopOpacity={0.3} />
        <stop offset={0.7} stopColor='#D4612C' stopOpacity={0.5} />
        <stop offset={1} stopColor='#D15D2D' stopOpacity={0.7} />
      </linearGradient>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodDiscoverBrandIcon);
export default ForwardRef;
