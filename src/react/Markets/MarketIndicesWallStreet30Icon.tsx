import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const MarketIndicesWallStreet30Icon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fill='#4CAF50'
      d='M26 8H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M26 9H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1M6 8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      d='m9.397 14.09.529 2.777.645-2.777h.682l.642 2.782.526-2.782h.803L12.356 18h-.81l-.637-2.616L10.273 18H9.46l-.867-3.91zm6.134 0L16.994 18h-.856l-.272-.806h-1.412l-.269.806h-.856l1.455-3.91zm2.634 0v3.263h1.711V18H17.36v-3.91zm2.979 0v3.263h1.71V18h-2.516v-3.91zm-5.986.988-.487 1.464h.978zm7.955-3.6q.266 0 .475.096a.76.76 0 0 1 .323.273q.116.175.116.4h-.513a.34.34 0 0 0-.107-.266.44.44 0 0 0-.303-.095.47.47 0 0 0-.292.08.25.25 0 0 0-.105.209q0 .12.123.203.122.082.36.154.437.132.637.326.2.195.2.486a.6.6 0 0 1-.245.507q-.245.183-.657.183-.288 0-.523-.105a.83.83 0 0 1-.36-.288.74.74 0 0 1-.124-.424h.514q0 .412.492.412a.48.48 0 0 0 .286-.074.24.24 0 0 0 .102-.208.26.26 0 0 0-.102-.223 1.4 1.4 0 0 0-.37-.164 2.6 2.6 0 0 1-.421-.17q-.424-.229-.424-.617a.6.6 0 0 1 .113-.36.74.74 0 0 1 .327-.247 1.2 1.2 0 0 1 .477-.089m3.134.034v.415h-.762V14h-.513v-2.073h-.752v-.415z'
    />
    <path
      fill='#414652'
      d='M18 2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H20a2 2 0 0 1-2-2z'
    />
    <path
      fill='#fff'
      d='M22.3 4.624q.447 0 .647-.168a.55.55 0 0 0 .208-.432v-.056a.63.63 0 0 0-.2-.488q-.192-.184-.552-.184-.335 0-.632.176a1.47 1.47 0 0 0-.504.488l-.752-.704q.16-.208.344-.376.184-.176.416-.296.232-.128.52-.192.288-.072.648-.072.448 0 .808.104.367.104.624.304.264.192.4.464.144.272.144.608 0 .264-.088.48-.08.217-.232.376a1.3 1.3 0 0 1-.336.264 1.5 1.5 0 0 1-.408.136v.048q.248.048.456.16.216.105.368.272.16.168.248.4.088.225.088.512 0 .375-.152.68a1.5 1.5 0 0 1-.432.52q-.28.216-.672.336-.392.112-.864.112-.423 0-.752-.088a2.4 2.4 0 0 1-.576-.232 2.3 2.3 0 0 1-.424-.344 3 3 0 0 1-.312-.408l.888-.688q.184.345.448.568.272.216.728.216.408 0 .632-.2a.72.72 0 0 0 .232-.56v-.048q0-.345-.264-.512-.255-.176-.712-.176h-.504v-1zM27.4 8.096q-1.096 0-1.624-.76t-.528-2.128.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.48 0 .664-.352t.184-.992V4.68q0-.64-.184-.992t-.664-.352-.664.352-.184.992v1.056q0 .64.184.992t.664.352'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketIndicesWallStreet30Icon);
export default ForwardRef;
