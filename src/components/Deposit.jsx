import React from 'react'

const Deposit = () => {
  return (
    <>
        <section className='mb-3'>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Account 1</h4>
                    <p className="card-desc">
                        Initial Deposit: <code>2190.09 USD</code>
                    </p>

                    <div className="table-responsive">
                        <table className="table mb-0">
                            <thead>
                                <tr>
                                    <th>Year/Month</th>
                                    <th>Jan</th>
                                    <th>Feb</th>
                                    <th>Mar</th>
                                    <th>Apr</th>
                                    <th>May</th>
                                    <th>Jun</th>
                                    <th>Jul</th>
                                    <th>Aug</th>
                                    <th>Sep</th>
                                    <th>Oct</th>
                                    <th>Nov</th>
                                    <th>Dec</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">2022</th>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>11.20</td>
                                    <td className="table-light"><strong>11.20%</strong></td>
                                </tr>
                                <tr>
                                    <th scope="row">2023</th>
                                    <td>14.52</td>
                                    <td>14.61</td>
                                    <td>22.32</td>
                                    <td>12.78</td>
                                    <td>11.67</td>
                                    <td>7.75</td>
                                    <td>4.07</td>
                                    <td>4.43</td>
                                    <td>7.99</td>
                                    <td>10.09</td>
                                    <td>8.17</td>
                                    <td>9.59</td>
                                    <td className="table-light"><strong>128.81%</strong></td>
                                </tr>
                                <tr>
                                    <th scope="row">2024</th>
                                    <td>4.70</td>
                                    <td>11.92</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className="table-light"><strong>16.62%</strong></td>
                                </tr>
                                <tr>
                                    <th colspan="13" scope="row" className="table-success">Total</th>
                                    <td className="table-success"><strong>156.63%</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </section>
        <section className='mb-3'>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">
                        Account 2
                    </h4>
                    <p className="card-desc">
                        Initial Deposit: <code>10001.04 USD</code>
                    </p>
                    <div className="table-responsive">
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Year/Month</th>
                                    <th>Jan</th>
                                    <th>Feb</th>
                                    <th>Mar</th>
                                    <th>Apr</th>
                                    <th>May</th>
                                    <th>Jun</th>
                                    <th>Jul</th>
                                    <th>Aug</th>
                                    <th>Sep</th>
                                    <th>Oct</th>
                                    <th>Nov</th>
                                    <th>Dec</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">2022</th>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>4.45</td>
                                    <td>7.28</td>
                                    <td>7.59</td>
                                    <td>7.61</td>
                                    <td>9.14</td>
                                    <td>6.57</td>
                                    <td>7.74</td>
                                    <td>6.97</td>
                                    <td class="table-light"><strong>57.35%</strong></td>
                                </tr>
                                <tr>
                                    <th scope="row">2023</th>
                                    <td>4.81</td>
                                    <td>4.79</td>
                                    <td>3.11</td>
                                    <td>2.07</td>
                                    <td>5.49</td>
                                    <td>4.42</td>
                                    <td>1.64</td>
                                    <td>2.28</td>
                                    <td>2.70</td>
                                    <td>5.28</td>
                                    <td>3.66</td>
                                    <td>12.34</td>
                                    <td class="table-light"><strong>52.60%</strong></td>
                                </tr>
                                <tr>
                                    <th scope="row">2024</th>
                                    <td>5.62%</td>
                                    <td>5.96%</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td class="table-light"><strong>11.57%</strong></td>
                                </tr>
                                <tr>
                                    <th colSpan={13} scope="row" class="table-success">Total</th>
                                    <td class="table-success"><strong>121.52%</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Deposit
